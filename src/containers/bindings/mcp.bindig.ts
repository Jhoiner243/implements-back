import { ContainerModule, interfaces } from "inversify";
import { McpController } from "../../controllers/mcp.controller";
import { MCPClient } from "../../frameworks/mcp-client";
import { StreamablePostgresServer } from "../../frameworks/mcp-server";
import { McpService } from "../../services/mcp.service";

export const mcpBinding = new ContainerModule((bind: interfaces.Bind) => {
  bind(MCPClient).toSelf()
  bind(McpService).toSelf()
  bind(StreamablePostgresServer).toSelf()
  bind(McpController).toSelf()
})