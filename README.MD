# Node.js - Arquitectura Limpia (Clean Code Architecture)

![Arquitectura Limpia](https://i.ibb.co/S0MQVFN/68747470733a2f2f626c6f672e636c65616e636f6465722e636f6d2f756e636c652d626f622f696d616765732f323031322d.jpg)

Aplicación backend diseñada utilizando los principios de la **Arquitectura Limpia**. Construida con **Node.js**, **Typescript**, **Express**, **PostgreSQL**, **Sequelize** y **autenticación con Clerk**, este proyecto garantiza separación de responsabilidades, mantenibilidad y escalabilidad.

## Versión

Versión actual de la aplicación: **1.0.0**

## Autor

- Jhoiner Martinez

## Detalles Técnicos

### Tecnologías Utilizadas

- Node.js, TypeScript, Express, PostgreSQL, Sequelize, Autenticación con JWT

- **Librerías**:

  - @godaddy/terminus ^4.12.1
  - bcrypt ^5.1.1
  - compression ^1.7.5
  - cookie-parser ^1.4.7
  - cors ^2.8.5
  - express ^4.21.1
  - helmet ^8.0.0
  - inversify ^6.1.4
  - jsonwebtoken ^9.0.2
  - morgan ^1.10.0
  - multer ^1.4.5-lts.1
  - nodemailer ^6.9.16
  - reflect-metadata ^0.2.2
  - winston ^3.17.0

- **Herramientas de Desarrollo**:

  - @types/bcrypt ^5.0.2
  - @types/compression ^1.7.5
  - @types/cookie-parser ^1.4.7
  - @types/cors ^2.8.17
  - @types/express ^5.0.0
  - @types/jsonwebtoken ^9.0.7
  - @types/morgan ^1.9.9
  - @types/multer ^1.4.12
  - @types/nodemailer ^6.4.16
  - @types/pg ^8.11.10
  - dotenv ^16.4.5
  - nodemon ^3.1.7
  - pg ^8.13.1
  - sequelize ^6.37.5
  - ts-node ^10.9.2
  - typescript ^5.6.3

## Funcionalidades

- **Autenticación**: Autenticación de usuario basada en JWT, inicio de sesión, registro, restablecimiento de contraseña y verificación por correo electrónico.
- **Subida de Imágenes**: Carga y almacenamiento de imágenes en PostgreSQL.
- **Manejo de Errores**: Manejo de errores personalizado con middleware y utilidades.
- **Seguridad**: Middleware de autenticación JWT y validación de entradas.

## Estructura del Proyecto

```
src/
    ├── app/                // Lógica principal de la aplicación
    ├── config/             // Archivos de configuración (db.config, smtp.config)
    ├── constants/          // Constantes utilizadas en toda la aplicación
    ├── containers/         // Bindings de InversifyJS para Inyección de Dependencias (DI)
    ├── controllers/        // Maneja las solicitudes HTTP entrantes
    ├── entities/           // Modelos de datos principales (User, Image)
    ├── frameworks/         // Infraestructura (base de datos, errores, middlewares, configuración)
    ├── models/             // Modelos de base de datos, representan tablas en la base de datos
    ├── repositories/       // Interacciones con la base de datos
    ├── services/           // Lógica de negocio y servicios de aplicación
    ├── templates/          // Plantillas de correo electrónico con Handlebars (hbs)
    ├── ts/                 // Definiciones de TS (dtos, enums, interfaces, tipos)
    ├── utils/              // Utilidades, helpers, regex y validadores
    └── server.ts           // Configuración del servidor Express
```

## Licencia

Este proyecto está licenciado bajo la Licencia ISC. Ver el archivo [LICENSE](LICENSE) para más detalles.
