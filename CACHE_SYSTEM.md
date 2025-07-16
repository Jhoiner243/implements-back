# Sistema de Cache para Facturas

## Descripción General

El sistema de cache implementado utiliza Redis para mejorar el rendimiento de las operaciones de facturas, reduciendo la carga en la base de datos y acelerando las respuestas de la API.

## Arquitectura del Cache

### Tipos de Cache

1. **Cache de Factura Individual** (`factura:{id}`)

   - Almacena una factura específica por su ID
   - TTL: 1 hora
   - Se invalida cuando se actualiza o elimina la factura

2. **Cache de Listado de Facturas** (`factura:list:{status}:v{version}:{limit}:{page}`)

   - Almacena listados paginados de facturas por status
   - Utiliza versionado para invalidación eficiente
   - TTL: 1 hora

3. **Cache de Conteo Total** (`factura:count:{status}`)

   - Almacena el número total de facturas por status
   - TTL: 1 hora
   - Se invalida cuando se crean, actualizan o eliminan facturas

4. **Cache de Versión** (`version:factura:{status}`)
   - Controla la invalidación de listados por status
   - Se incrementa cuando se modifica una factura de ese status

## Estrategia de Invalidación

### Invalidación por Versión

- Cada status tiene su propio contador de versión
- Cuando se modifica una factura, se incrementa la versión del status correspondiente
- Los listados cacheados incluyen la versión en la clave, haciendo que se vuelvan obsoletos automáticamente

### Invalidación Granular

- **Creación**: Invalida todos los caches de listado y conteo
- **Actualización**: Invalida cache de la factura específica y listados del status actual y anterior (si cambió)
- **Eliminación**: Invalida cache de la factura específica y listados del status correspondiente

## Métodos del Servicio

### Métodos Principales

- `dataFact()`: Crea factura e invalida caches
- `getFact()`: Obtiene listado con cache
- `getFacturaWithStatus()`: Obtiene listado por status con cache
- `getFacturaById()`: Obtiene factura individual con cache
- `updateFact()`: Actualiza factura e invalida caches
- `deleteFact()`: Elimina factura e invalida caches

### Métodos de Gestión de Cache

- `clearAllFacturaCache()`: Limpia todo el cache de facturas
- `clearFacturaCacheById()`: Limpia cache de una factura específica
- `getCacheStats()`: Obtiene estadísticas del cache

## Endpoints de Gestión de Cache

### Limpiar Todo el Cache

```
DELETE /facturas/cache/all
```

### Limpiar Cache de Factura Específica

```
DELETE /facturas/cache/:id
```

### Obtener Estadísticas del Cache

```
GET /facturas/cache/stats
```

## Configuración

### TTL (Time To Live)

- **Valor por defecto**: 3600 segundos (1 hora)
- **Configurable**: Modificar `CACHE_TTL` en `FacturaService`

### Prefijos de Claves

- **Prefijo principal**: `factura`
- **Claves de versión**: `version:factura`
- **Claves de conteo**: `factura:count`
- **Claves de listado**: `factura:list`

## Beneficios

1. **Rendimiento**: Respuestas más rápidas para consultas frecuentes
2. **Escalabilidad**: Reduce la carga en la base de datos
3. **Consistencia**: Invalidación automática mantiene datos actualizados
4. **Flexibilidad**: Gestión manual del cache disponible
5. **Monitoreo**: Estadísticas del cache para análisis

## Consideraciones

1. **Memoria**: El cache consume memoria Redis
2. **Consistencia**: Pequeña ventana de inconsistencia durante invalidación
3. **Configuración**: Requiere Redis configurado y accesible
4. **Mantenimiento**: Monitoreo regular del uso de memoria

## Ejemplo de Uso

```typescript
// Obtener facturas con cache automático
const facturas = await facturaService.getFact({
  limit: 10,
  page: 1,
  status: StatusFactura.Pendiente,
});

// Limpiar cache manualmente
await facturaService.clearAllFacturaCache();

// Obtener estadísticas
const stats = await facturaService.getCacheStats();
console.log(`Total keys: ${stats.totalKeys}`);
```
