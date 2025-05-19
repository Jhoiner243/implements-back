import {
  DetallesFacturasEntity,
  FacturaAdapter,
  FacturasEntity,
} from "../../entities/facturas.entity";

export function adaptFactura(dto: FacturaAdapter[] | null): FacturasEntity[] {
  if (dto === null) return [];
  return dto.map((raw) => {
    // 1️⃣ Validaciones generales
    if (!raw.id_cliente) {
      throw new Error("Factura sin cliente asociado (id_cliente es null)");
    }
    if (
      !Array.isArray(raw.detalles) ||
      raw.detalles[0].id_producto?.length === 0
    ) {
      throw new Error("Factura sin detalles");
    }

    // 2️⃣ Validar y transformar cada detalle
    const detalles: DetallesFacturasEntity[] = raw.detalles.map((d, idx) => {
      if (!d.id_producto) {
        throw new Error(
          `Detalle #${idx} sin producto asociado (id_producto es null)`
        );
      }
      return {
        id_producto: d.id_producto,
        cantidad: d.cantidad,
        precio_venta: d.precio_venta,
      };
    });

    // 3️⃣ Construir y devolver la entidad limpia
    const factura: FacturasEntity = {
      id_cliente: raw.id_cliente,
      detalles,
      total: raw.total,
      createdAt: raw.createdAt,
    };

    return factura;
  });
}
