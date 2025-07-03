import { injectable } from "inversify";
import {
  DetallesFacturasEntity,
  FacturaSeccion,
  FacturasEntity,
  StatusFactura,
} from "../entities/facturas.entity";
import { db } from "../frameworks/db/db";
import { PanginationDto } from "../ts/dtos/paginationDto";
import { IFacturas } from "../ts/interfaces/facturas.interface";
import { emailFacts } from "../utils/helpers/email-facts";
import { BaseRepository } from "../utils/tenant-id";

@injectable()
export class FacturaRepository extends BaseRepository implements IFacturas {
  async dataFact(data: FacturasEntity): Promise<void> {
    const empresaId = this.getEmpresaId();

    let facturaCreada;
    try {
      facturaCreada = await db.$transaction(async (tx) => {
        // 1) Crear factura con detalles
        const factura = await tx.factura.create({
          data: {
            empresa_id: empresaId,
            clienteId: data.id_cliente,
            total: data.total,
            detalles: {
              create: (data.detalles ?? []).map(
                (d: DetallesFacturasEntity) => ({
                  productoId: d.id_producto,
                  cantidad: d.cantidad,
                  precio: d.precio_venta,
                })
              ),
            },
          },
        });

        // 2) Actualizar stock de cada producto
        for (const d of data.detalles ?? []) {
          await tx.productos.update({
            where: { id: d.id_producto },
            data: { stock: { decrement: d.cantidad } },
          });
        }

        return factura;
      });

      // 3) Invalidar la caché una vez confirmada la transacción

      // 4) Enviar correo
      await emailFacts(facturaCreada.id);
    } catch (err) {
      // Manejo de error: log, rethrow o enviar respuesta de error
      console.error("Error al procesar factura:", err);
      throw err;
    }
  }

  async CountFact() {
    return await db.factura.count();
  }
  async getFact({
    page = 1,
    limit = 10,
  }: PanginationDto): Promise<FacturaSeccion[]> {
    const empresaId = this.getEmpresaId();
    const Facturas = await db.factura.findMany({
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
      include: { cliente: true },
      where: { empresa_id: empresaId },
    });

    return Facturas.map((factura) => ({
      id: factura.id,
      idFactura: factura.idFactura,
      id_cliente: factura.cliente.name,
      total: factura.total,
      detalles: [],
      status: factura.status as StatusFactura,
      createdAt: factura.createdAt,
      updatedAt: factura.updatedAt,
    }));
  }

  async getStatus({
    page = 1,
    limit = 10,
    status,
  }: PanginationDto): Promise<FacturaSeccion[]> {
    const empresaId = this.getEmpresaId();
    const Facturas = await db.factura.findMany({
      skip: (page - 1) * limit,
      where: { status, empresa_id: empresaId },
      take: limit,
      include: { cliente: true },
    });

    return Facturas.map((factura) => ({
      id: factura.id,
      idFactura: factura.idFactura,
      id_cliente: factura.cliente?.name ?? "Unknown",
      total: factura.total,
      detalles: [],
      status: factura.status as StatusFactura,
      createdAt: factura.createdAt,
      updatedAt: factura.updatedAt,
    }));
  }

  async deleteFact(id: string): Promise<void> {
    await db.detalleFactura.delete({
      where: {
        id: id,
      },
    });
  }
  async getFacturaById(id: string) {
    const empresaId = this.getEmpresaId();
    return await db.factura.findUnique({
      where: {
        id: id,
        empresa_id: empresaId,
      },
      include: {
        cliente: {
          select: {
            name: true,
            email: true,
            phone: true,
            address: true,
          },
        },

        detalles: {
          include: {
            producto: {
              select: {
                id: true,
                nombre: true,
              },
            },
          },
        },
      },
    });
  }
  async updateFact(id: string, data: Partial<FacturaSeccion>): Promise<void> {
    await db.factura.update({
      where: {
        id: id,
      },
      data: {
        detalles: {
          create: (data.detalles ?? []).map((detalle) => ({
            productoId: detalle.id_producto,
            cantidad: detalle.cantidad,
            precio: detalle.precio_venta,
          })),
        },
        clienteId: data.id_cliente,
        status: data.status,
        total: data.total,
      },
    });
  }
}
