// controllers/mcp.controller.ts
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import type { Request, Response } from "express";
import { inject } from "inversify";
import {
  Get,
  JsonController,
  Post,
  QueryParam,
  Req,
  Res,
} from "routing-controllers";
import { MCPClient } from "../frameworks/mcp-client";
import { LlmResponse } from "../frameworks/mcp-client/type";
import { McpService } from "../services/mcp.service";
import { BaseController } from "./base.controller";

@JsonController()
export class McpController implements BaseController {
  constructor(
    @inject(McpService) private readonly service: McpService,
    @inject(MCPClient) private mcpClient: MCPClient
  ) {}

  @Get("/resources")
  async getResources() {
    return this.service.listResources();
  }

  @Get("/resources/schema")
  async getSchema(@QueryParam("uri") uri: string) {
    return this.service.readResourceSchema({ uri });
  }
  @Post("/call_tool_request_schema")
  async callQuery(sql: string) {
    return this.service.CallToolRequestSchema({ sql });
  }
  @Get("/tools")
  async getTools() {
    return this.service.listTools();
  }

  @Post("/tools/query")
  async postQuery(@Req() req: Request): Promise<LlmResponse> {
    const { prompt } = req.body;
    const response = await this.mcpClient.processQuery(prompt);
    return { role: "assitent", messages: response };
  }

  @Get("/tool/query/stream")
  async streamQuery(@Res() res: Response) {
    // Inicializa el transporte SSE y conecta al MCP
    const transport: SSEServerTransport = new SSEServerTransport(
      "/tools/query",
      res
    );
    const server = await this.service.createSseTransport();
    await server.connect(transport);
    await transport.start();
  }
}
