/* eslint-disable @typescript-eslint/no-explicit-any */
import { format } from "date-fns";
import { inject, injectable } from "inversify";
import { db } from "../frameworks/db/db";
import { AnaliticsRepository } from "../repositories/analitics.repository";

@injectable()
export class AnaliticsService {
  constructor(
    @inject(AnaliticsRepository)
    private analiticsRepository: AnaliticsRepository
  ) {}
  async getAnalitIcsPedidos() {
    const pedidos = await this.analiticsRepository.getAnalitIcsPedidos();
    const dailyCounts = new Map<string, number>();

    pedidos.forEach((pedido) => {
      const diaKey = format(new Date(pedido.createdAt), "yyyy-MM-dd");
      dailyCounts.set(diaKey, (dailyCounts.get(diaKey) || 0) + 1);
    });

    return {
      diario: Array.from(dailyCounts, ([periodo, pedidos]) => ({
        periodo,
        pedidos,
      })),
    };
  }
  async getAnaliticsClientes() {
    const pedidos = await this.analiticsRepository.getAnalitIcsPedidos();
    const clientes = await db.clientes.findMany();

    // Mapa de clientes con mismo tipo de ID que los pedidos
    const clientesMap = new Map<string, string>( // Cambiado a string
      clientes.map((cliente) => [cliente.id.toString(), cliente.name])
    );

    const weeklyClientes = new Map<
      string,
      Map<string, { cliente: string; pedidos: number }>
    >();

    pedidos.forEach((pedido) => {
      const fecha = new Date(pedido.createdAt);
      const weekKey = format(fecha, "yyyy-'W'ww");
      const clienteId = pedido.id_cliente.toString();

      if (!weeklyClientes.has(weekKey)) {
        weeklyClientes.set(weekKey, new Map());
      }

      const clientesSemana = weeklyClientes.get(weekKey)!;
      const nombreCliente =
        clientesMap.get(clienteId) || `Cliente ${clienteId}`;

      if (clientesSemana.has(clienteId)) {
        clientesSemana.get(clienteId)!.pedidos += 1;
      } else {
        clientesSemana.set(clienteId, {
          cliente: nombreCliente,
          pedidos: 1,
        });
      }
    });

    // Formatear respuesta
    const response = Array.from(weeklyClientes, ([semana, clientes]) => ({
      semana,
      clientes: Array.from(clientes.values())
        .sort((a, b) => b.pedidos - a.pedidos)
        .slice(0, 5),
    }));

    return response;
  }
  async getAnaliticsProductos() {
    const pedidos = await this.analiticsRepository.getAnalitIcsPedidos();
    const producto = await db.productos.findMany();

    // Mapa para agrupar por semana y producto
    const weeklyProducts = new Map<
      string,
      Map<string, { producto: any; cantidad: number }>
    >();

    pedidos.forEach((pedido) => {
      const fecha = new Date(pedido.createdAt);
      const weekKey = format(fecha, "yyyy-'W'ww"); // ej. "2024-W21"

      // Inicializar semana si no existe
      if (!weeklyProducts.has(weekKey)) {
        weeklyProducts.set(weekKey, new Map());
      }
      const productosSemana = weeklyProducts.get(weekKey)!;

      // Recorrer productos del pedido
      pedido.detalles.forEach(
        (item: { id_producto: string; cantidad: number }) => {
          const productId = item.id_producto;
          const cantidad = item.cantidad;

          // Buscamos el nombre en el catálogo
          const prodData = producto.find((p) => p.id === productId);
          const nombre = prodData ? prodData.nombre : "Desconocido";

          // Actualizar cantidad del producto
          if (productosSemana.has(productId)) {
            const entry = productosSemana.get(productId)!;
            entry.cantidad += cantidad;
          } else {
            productosSemana.set(productId, {
              producto: nombre,
              cantidad: cantidad,
            });
          }
        }
      );
    });

    // Formatear respuesta ordenando por cantidad y tomando top 5
    const response = Array.from(weeklyProducts, ([semana, productosMap]) => ({
      semana,
      productos: Array.from(productosMap.values())
        .sort((a, b) => b.cantidad - a.cantidad)
        .slice(0, 5),
    }));

    return response;
  }
}
