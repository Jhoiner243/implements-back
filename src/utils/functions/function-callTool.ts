import { inject } from 'inversify'
import { McpService } from '../../services/mcp.service'

export class CallFunctionClass {
  constructor(@inject(McpService) private mcpService: McpService){}

  async CallToolFunction () {
    const result = this.mcpService.listResources()
    return result
  }
  public valuesDeclarations () {
    const setValuesFunctionCall = {
      name: 'callTool',
      description: 'Esta funcion devuelve la lista de recursos (tablas) si el usuario desea saber algo sobre los datos que se utilizan en la empresa, por ejemplo: Dime cuales son los clientes que mas compran? deberias acceder a las tablas para saber cual es la tabla de los clientes y determinar cuales son los clientes que mas compran'
    }

    return setValuesFunctionCall
  }
}
