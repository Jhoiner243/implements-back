import { ContainerModule, interfaces } from "inversify";
import { MCPClient } from "../../frameworks/mcp-client";

export const mcpBinding = new ContainerModule((bind: interfaces.Bind) => {
  bind(MCPClient).toSelf()
})