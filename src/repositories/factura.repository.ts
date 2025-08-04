import { Factura } from "@prisma/client";
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

// Interfaz para la respuesta de Gemini AI
interface GeminiResponse {
  fecha?: string | null;
  numeroFactura?: string | null;
  total: number;
  productos: Array<{
    nombre: string;
    cantidad: number;
    precio: number;
  }>;
  cliente?: {
    nombre?: string | null;
    email?: string | null;
    telefono?: string | null;
    direccion?: string | null;
  };
}

@injectable()
export class FacturaRepository extends BaseRepository implements IFacturas {
  async updateQrImage({
    qr,
    id,
    number,
  }: {
    number: string;
    qr: string;
    id: string;
  }) {
    await db.factura.update({
      where: {
        id: id,
      },
      data: {
        number,
        qr,
      },
    });
  }

  async dataFact(data: FacturasEntity) {
    const empresaId = this.getEmpresaId();
    try {
      // 1) Crear factura con detalles
      const facturaCreada = await db.factura.create({
        data: {
          empresa_id: empresaId,
          clienteId: data.id_cliente,
          total: data.total,
          detalles: {
            create: (data.detalles ?? []).map((d: DetallesFacturasEntity) => ({
              productoId: d.id_producto,
              cantidad: d.cantidad,
              precio: d.precio_venta,
              porcentage_descuento: d.porcentage_descuento,
            })),
          },
        },
        include: {
          detalles: {
            include: {
              producto: {
                select: {
                  nombre: true,
                  id: true,
                },
              },
            },
          },
          cliente: true,
          empresa: true,
        },
      });

      // 2) Actualizar stock de cada producto
      for (const d of data.detalles ?? []) {
        await db.productos.update({
          where: { id: d.id_producto },
          data: { stock: { decrement: d.cantidad } },
        });
      }

      // 3) Invalidar la caché una vez confirmada la transacción

      // 4) Enviar correo
      await emailFacts(facturaCreada.id);
      return facturaCreada;
    } catch (err) {
      // Manejo de error: log, rethrow o enviar respuesta de error
      console.error("Error al procesar factura:", err);
      throw err;
    }
  }

  async CountFact() {
    const empresaId = this.getEmpresaId();
    return await db.factura.count({
      where: { empresa_id: empresaId },
    });
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
      qr: factura.qr ?? "",
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
      qr: factura.qr ?? "",
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
  async updateFact(
    id: string,
    data: Partial<FacturaSeccion>
  ): Promise<Factura> {
    const factura = await db.factura.update({
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
    return factura;
  }

  /**
   * Procesa la respuesta de Gemini AI y crea la factura en la base de datos
   */
  async processGeminiResponse({
    geminiData,
    tenantId,
  }: {
    geminiData: GeminiResponse;
    tenantId: string;
  }) {
    try {
      // 1. Buscar o crear cliente
      const clienteId = await this.findOrCreateCliente(
        geminiData.cliente,
        tenantId
      );

      // 2. Procesar productos y obtener sus IDs
      const detalles = await this.processProductos(
        geminiData.productos,
        tenantId
      );

      // 3. Crear la factura con los datos procesados
      const facturaData: FacturasEntity = {
        id_cliente: clienteId,
        total: geminiData.total,
        detalles: detalles,
        createdAt: geminiData.fecha ? new Date(geminiData.fecha) : new Date(),
      };

      // 4. Guardar la factura usando el método existente

      return {
        success: true,
        factura: facturaData,
        message: "Factura procesada ",
      };
    } catch (error) {
      console.error("Error procesando respuesta de Gemini:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";
      throw new Error(
        `Error al procesar factura desde imagen: ${errorMessage}`
      );
    }
  }

  /**
   * Busca un cliente existente o crea uno nuevo basado en los datos de Gemini
   */
  private async findOrCreateCliente(
    clienteData: GeminiResponse["cliente"],
    empresaId: string
  ): Promise<string> {
    if (!clienteData?.nombre) {
      // Si no hay datos del cliente, crear uno genérico
      const clienteGenerico = await db.clientes.create({
        data: {
          identification: `CLI-${Date.now() + Math.floor(Math.random() * 3)}`,
          name: "Cliente Generado desde Imagen",
          email: "cliente@generado.com",
          phone: "0000000000",
          address: "Dirección no especificada",
          empresa_id: empresaId,
        },
      });
      return clienteGenerico.id;
    }

    // Buscar cliente por nombre
    const clienteExistente = await db.clientes.findFirst({
      where: {
        name: clienteData.nombre,
        empresa_id: empresaId,
      },
    });

    if (clienteExistente) {
      return clienteExistente.id;
    }

    // Crear nuevo cliente
    const nuevoCliente = await db.clientes.create({
      data: {
        identification: `CLI-${Date.now()}`,
        name: clienteData.nombre,
        email: clienteData.email || "cliente@generado.com",
        phone: clienteData.telefono || "0000000000",
        address: clienteData.direccion || "Dirección no especificada",
        empresa_id: empresaId,
      },
    });

    return nuevoCliente.id;
  }

  /**
   * Procesa los productos de la respuesta de Gemini y busca o crea productos
   */
  private async processProductos(
    productos: Array<{ nombre: string; cantidad: number; precio: number }>,
    empresaId: string
  ): Promise<DetallesFacturasEntity[]> {
    const detalles: DetallesFacturasEntity[] = [];

    for (const producto of productos) {
      // Buscar producto por nombre
      let productoEncontrado = await db.productos.findFirst({
        where: {
          nombre: {
            contains: producto.nombre,
            mode: "insensitive",
          },
          empresa_id: empresaId,
        },
      });

      // Si no existe, crear el producto
      if (!productoEncontrado) {
        // Buscar una categoría por defecto o crear una
        let categoria = await db.category.findFirst({
          where: { empresa_id: empresaId },
        });

        if (!categoria) {
          categoria = await db.category.create({
            data: {
              name: "General",
              empresa_id: empresaId,
            },
          });
        }

        const productoPrice = producto.precio - 1000;

        productoEncontrado = await db.productos.create({
          data: {
            nombre: producto.nombre,
            precio_compra: productoPrice,
            stock: 100, // Stock por defecto
            categoryId: categoria.id,
            empresa_id: empresaId,
          },
        });
      }

      // Agregar a los detalles
      detalles.push({
        id_producto: productoEncontrado.id,
        cantidad: producto.cantidad,
        precio_venta: producto.precio,
      });
    }

    return detalles;
  }

  /**
   * Valida y formatea la respuesta de Gemini AI
   */
  async validateGeminiResponse(response: unknown): Promise<GeminiResponse> {
    try {
      // Type guard para verificar que response es un objeto
      if (!response || typeof response !== "object") {
        throw new Error("Respuesta de Gemini debe ser un objeto");
      }

      const responseObj = response as Record<string, unknown>;

      // Validar estructura básica
      if (!responseObj.total || !responseObj.productos) {
        throw new Error(
          "Respuesta de Gemini incompleta: faltan campos requeridos"
        );
      }

      // Validar que productos sea un array
      if (!Array.isArray(responseObj.productos)) {
        throw new Error("Campo 'productos' debe ser un array");
      }

      // Validar cada producto
      for (const producto of responseObj.productos) {
        if (
          typeof producto !== "object" ||
          !producto ||
          !("nombre" in producto) ||
          !("cantidad" in producto) ||
          !("precio" in producto) ||
          typeof producto.nombre !== "string" ||
          typeof producto.cantidad !== "number" ||
          typeof producto.precio !== "number"
        ) {
          throw new Error("Datos de producto inválidos");
        }
      }

      // Validar total
      if (typeof responseObj.total !== "number" || responseObj.total <= 0) {
        throw new Error("Total inválido");
      }

      return response as GeminiResponse;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";
      throw new Error(`Error validando respuesta de Gemini: ${errorMessage}`);
    }
  }

  /**
   * Obtiene estadísticas de facturas procesadas desde imágenes
   */
  async getFacturasFromImagesStats() {
    const empresaId = this.getEmpresaId();

    const totalFacturas = await db.factura.count({
      where: { empresa_id: empresaId },
    });

    return {
      totalFacturas,
      facturasDesdeImagenes: "N/A",
    };
  }
}
