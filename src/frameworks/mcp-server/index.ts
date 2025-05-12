import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import dotenv from "dotenv";
import { Request } from "express";
import { injectable } from "inversify";
import pg from "pg";
import { DATABASE_URL } from "../../config/configs";
dotenv.config();

@injectable()
export class StreamablePostgresServer {
  private pool: pg.Pool;
  private schemaPath: string = "";

  constructor() {
    this.pool = new pg.Pool({
      connectionString: DATABASE_URL,
    });
    this.schemaPath = "schema";
  }

  async setup() {
    const server = new McpServer({ name: "mcp-sse-server", version: "1.0.0" });
    return server;
  }

  async toolListTable() {
    if (!DATABASE_URL) throw new Error("Error falta DATABASE_URL");
    const resourceBaseUrl = new URL(DATABASE_URL);
    resourceBaseUrl.protocol = "postgres:";
    resourceBaseUrl.password = "";
    const client = await this.pool.connect();
    try {
      const result = await client.query(
        "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
      );
      return {
        resources: result.rows.map((row) => ({
          uri: new URL(`${row.table_name}/${this.schemaPath}`, resourceBaseUrl)
            .href,
          mimeType: "application/json",
          name: `"${row.table_name}" database schema`,
        })),
      };
    } finally {
      client.release();
    }
  }

  async toolReadResourceSchema(request: Request) {
    const resourceUrl = new URL(request.params.uri);
    const pathComponents = resourceUrl.pathname.split("/");
    const schema = pathComponents.pop();
    const tableName = pathComponents.pop();

    if (schema !== this.schemaPath) {
      throw new Error("Invalid resource URI");
    }
    const client = await this.pool.connect();
    try {
      const result = await client.query(
        "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = $1",
        [tableName]
      );

      return {
        contents: [
          {
            uri: request.params.uri,
            mimeType: "application/json",
            text: JSON.stringify(result.rows, null, 2),
          },
        ],
      };
    } finally {
      client.release();
    }
  }

  async ListToolsRequestSchema() {
    return {
      tools: [
        {
          name: "query",
          description: "Run a read-only SQL query",
          inputSchema: {
            type: "object",
            properties: {
              sql: { type: "string" },
            },
          },
        },
      ],
    };
  }

  async CallToolRequestSchema(request: Request) {
    if (request.method === "query") {
      const args = request.params.arguments as unknown as { sql: string };
      const sql = args?.sql;
      const client = await this.pool.connect();
      try {
        await client.query("BEGIN TRANSACTION READ ONLY");
        const result = await client.query(sql);
        return {
          content: [
            { type: "text", text: JSON.stringify(result.rows, null, 2) },
          ],
          isError: false,
        };
      } finally {
        client
          .query("ROLLBACK")
          .catch((error) =>
            console.warn("Could not roll back transaction:", error)
          );

        client.release();
      }
    }
  }
}
