/* eslint-disable @typescript-eslint/no-explicit-any */
// services/mcp.service.ts
import type { JSONRPCRequest } from "@modelcontextprotocol/sdk/types";
import { randomUUID } from "crypto";
import { injectable } from "inversify";
import { StreamablePostgresServer } from "../frameworks/mcp-server";

@injectable()
export class McpService {
  constructor(private readonly server: StreamablePostgresServer) {}

  /** Devuelve la lista de recursos (tablas) */
  async listResources() {
    return this.server.toolListTable();
  }

  /** Devuelve el esquema de la tabla indicada */
  async readResourceSchema({ uri }: { uri: string }) {
    // Aquí pasas solo el URI, no todo el Request de Express
    return this.server.toolReadResourceSchema({ params: { uri } } as any);
  }

  /** Devuelve la lista de herramientas */
  async listTools() {
    return this.server.ListToolsRequestSchema();
  }

  /** Ejecuta la herramienta 'query' y retorna la respuesta JSON-RPC */
  async CallToolRequestSchema({ sql }: { sql: string }) {
    const request: JSONRPCRequest = {
      id: randomUUID(),
      jsonrpc: "2.0",
      method: "query",
      params: { arguments: { sql: sql } },
    };

    const data = await this.server.CallToolRequestSchema(request as any);

    if (typeof data === "object") {
      return data.content[0].text;
    } else {
      throw new Error("Unexpected data type received");
    }
  }

  /** Expone el objeto de stream de SSE para que el controlador lo use */
  createSseTransport() {
    return this.server.setup();
    // método nuevo que solo devuelve un SSEServerTransport sin manejar Response
  }
}
