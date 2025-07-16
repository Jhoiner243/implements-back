/* eslint-disable @typescript-eslint/no-explicit-any */
// src/clients/mcp-client.ts
import {
  FunctionCallingConfigMode,
  GenerateContentConfig,
  GoogleGenAI,
  Type,
  type Content,
} from "@google/genai";
import { Client as McpClientSdk } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { Tool } from "@modelcontextprotocol/sdk/types";
import dotenv from "dotenv";
import { inject, injectable } from "inversify";
import { URL_API } from "../../config/configs";
import { McpService } from "../../services/mcp.service";
import { AppError } from "../../utils/errors/app-errors";
import { BaseRepository } from "../../utils/tenant-id";
import { ChatMessage, funcionCall } from "./type";

dotenv.config();

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const PATH_TO_SERVER = process.env.PATH_TO_SERVER;

if (!GOOGLE_API_KEY) {
  throw new Error("GOOGLE_API_KEY no está definida en el .env");
}
if (!PATH_TO_SERVER) {
  throw new Error(
    "PATH_TO_SERVER (ruta al script del servidor) no está definida en el .env"
  );
}
@injectable()
export class MCPClient extends BaseRepository {
  private mcp: McpClientSdk;
  private llm: GoogleGenAI;
  private transport!: SSEClientTransport;
  private tools: Tool[] = [];

  constructor(@inject(McpService) private mcpService: McpService) {
    super();
    this.llm = new GoogleGenAI({ apiKey: GOOGLE_API_KEY });
    this.mcp = new McpClientSdk({ name: "mcp-client-cli", version: "1.0.0" });
  }

  /**
   * Conecta al servidor MCP (JS o PY) vía stdio y registra las herramientas
   */
  async connectToServer() {
    const URL_SERVER = new URL(URL_API);
    this.transport = new SSEClientTransport(new URL(URL_SERVER));

    await this.mcp.connect(this.transport);

    // Traer la lista de herramientas del servidor
    const { tools } = await this.mcp.listTools();
    this.tools = tools.map((t) => ({
      name: t.name,
      description: t.description,
      inputSchema: t.input_schema as {
        [x: string]: unknown;
        type: "object";
        properties?: { [x: string]: unknown } | undefined;
      },
    }));
    return this.tools.map((t) => t.name).join(", ");
  }

  /**
   * Procesa una consulta:
   * 1. Envía el prompt al LLM junto con metadata de tools
   * 2. Si el LLM responde un tool_use, invoca mcp.callTool(...)
   * 3. Alimenta la respuesta de la herramienta de vuelta al LLM
   */
  async processQuery(query: string): Promise<ChatMessage[]> {
    const finalText: string[] = [];
    const empresaId = this.getEmpresaId();
    //Definiendo la funcion call con declaraciones
    const setValuesFunctionCall = {
      name: "call_tool",
      description: `Utiliza este empresa_id: ${empresaId} para filtrar todos los datos mediante ese id en cada consulta sql a postgres. Puedes ejecutar una consulta sql de solo lectura para leer los datos necesario para tu respuesta, ten en cuenta esto: Realizo la consulta utilizando comillas dobles alrededor del nombre de la tabla "Clientes" debido a que PostgreSQL (que parece ser el sistema de gestión de base de datos utilizado) es sensible a mayúsculas y minúsculas en los nombres de objetos`,
    };
    const setValuesRepeat = {
      name: "call_tool_repeat",
      description:
        "Esta funcion devuelve la lista de recursos (tablas) si el usuario pide datos en los que no se sepan las tablas necesarias para acceder a esos datos y dar la respuesta",
    };
    const ReadResourceSchemaFunctionDeclaration = {
      name: "read_resource_schema",
      description:
        "Devuelve el esquema de la tabla indicada, por ejemplo si solo necesitas acceder a la tabla de clientes esta funcion devuelve la tabla clientes",
      parameters: {
        type: Type.OBJECT,
        properties: {
          uri: {
            type: Type.STRING,
            description:
              "debes pasar el nombre de la tabla que de clientes, segun los datos de las tablas que obtuviste anteriormente",
          },
        },
        required: ["uri"],
      },
    };
    const setLightValuesFunctionDeclaration = {
      name: "call_tool_request_schema",
      description:
        "Debes tener en cuenta que las consultas son a una base de datos postgres",
      parameters: {
        type: Type.OBJECT,
        properties: {
          request: {
            type: Type.STRING,
            description: `Puedes ejecutar una consulta sql de solo lectura para leer los datos necesario para tu respuesta, ten en cuenta esto: Realizo la consulta utilizando comillas dobles alrededor del nombre de la tabla "Clientes" debido a que PostgreSQL (que parece ser el sistema de gestión de base de datos utilizado) es sensible a mayúsculas y minúsculas en los nombres de objetos
            Cuando ejecuté consultas anteriores sin comillas dobles para las tablas que comienzan con mayúsculas, obtuve errores como "relation 'productos' does not exist" o "relation 'category' does not exist". Esto ocurre porque PostgreSQL convierte automáticamente los identificadores sin comillas a minúsculas durante el procesamiento de consultas.
            Al colocar el nombre de la tabla entre comillas dobles ("Clientes"), le indico a PostgreSQL que respete exactamente la capitalización del nombre tal como está definido en la base de datos. Esta es una práctica estándar cuando se trabaja con bases de datos PostgreSQL donde los nombres de tablas contienen mayúsculas.
            En resumen, uso esta sintaxis para asegurarme de que la consulta apunte exactamente a la tabla correcta respetando su nombre original en la base de datos.`,
          },
        },
        required: ["request"],
      },
    };

    const functionDeclarations = [
      setLightValuesFunctionDeclaration,
      setValuesFunctionCall,
      ReadResourceSchemaFunctionDeclaration,
      setValuesRepeat,
    ];

    //Generando configuraciones con declaracion de funciones
    const config: GenerateContentConfig = {
      tools: [
        {
          functionDeclarations: functionDeclarations,
        },
      ],
      // Force the model to call 'any' function, instead of chatting.
      toolConfig: {
        functionCallingConfig: {
          mode: FunctionCallingConfigMode.AUTO,
        },
      },
    };

    //Definimos el user prompts
    const conversationHistory: Content[] = [
      {
        role: "user",
        parts: [
          {
            text: query,
          },
        ],
      },
    ];

    const toolCallNames: funcionCall[] = [];

    const response = await this.llm.models.generateContent({
      model: "gemini-2.5-flash-preview-04-17",
      contents: query,
      config: config,
    });
    const processFunctionCall = async (name: string, args: any) => {
      switch (name) {
        case "call_tool": {
          const resources = await this.mcpService.listResources();
          return JSON.stringify(resources.resources);
        }
        case "call_tool_repeat": {
          const resources = await this.mcpService.listResources();
          return JSON.stringify(resources.resources);
        }
        case "call_tool_request_schema": {
          const data = await this.mcpService.CallToolRequestSchema({
            sql: args.request,
          });
          return JSON.stringify(data);
        }
        case "read_resource_schema": {
          const schema = await this.mcpService.readResourceSchema({
            uri: args.uri,
          });

          return JSON.stringify(schema.contents);
        }

        default:
          return `Función ${name} no implementada`;
      }
    };
    const candidate = response.candidates?.[0];

    if (response.text) {
      if (!response.functionCalls) {
        finalText.push(response.text);
        return finalText.map(
          (text) => ({ finalText: { text } } as ChatMessage)
        );
      }
    }
    // Helper interno para llamar a la LLM con tool calling siempre
    const callLLM = async (history: Content[]) => {
      return this.llm.models.generateContent({
        model: "gemini-2.5-flash-preview-04-17",
        contents: history,
        config,
      });
    };

    // 1) Procesa cada functionCall en candidate.content.parts
    if (candidate?.content?.parts)
      try {
        for (const part of candidate.content.parts) {
          if (!part.functionCall) continue;
          const { name, args } = part.functionCall;
          if (!name) throw new Error("Value name is undefined");
          if (part.text) {
            finalText.push(JSON.stringify(part.text));
          }
          if (part.functionCall) {
            if (part.functionCall.name) {
              toolCallNames.push({
                name: part.functionCall.name,
                args: part.functionCall.args,
              });
            }
          }
          // Ejecuta la función original y actualiza el history
          const result = await processFunctionCall(name, args);
          conversationHistory.push({
            role: "model",
            parts: [{ functionCall: part.functionCall }],
          });
          conversationHistory.push({
            role: "user",
            parts: [{ text: `Resultado de la función: ${result}` }],
          });

          // 2) Primer follow-up
          const followupResponse = await callLLM(conversationHistory);
          if (followupResponse.text) finalText.push(followupResponse.text);

          const followupCandidate = followupResponse.candidates?.[0];
          if (!followupCandidate?.content?.parts) continue;

          // 3) Procesa cada part de followupCandidate
          for (const followupPart of followupCandidate.content.parts) {
            if (followupPart.functionCall) {
              toolCallNames.push({
                name: followupPart.functionCall.name,
                args: followupPart.functionCall.args,
              });
              const { name: fn2, args: args2 } = followupPart.functionCall;
              const result2 = await processFunctionCall(
                fn2 ?? "default_function_name",
                args2
              );
              conversationHistory.push({
                role: "model",
                parts: [{ functionCall: followupPart.functionCall }],
              });
              conversationHistory.push({
                role: "user",
                parts: [
                  {
                    text: `Resultados de la funcion de la tabla especifica: ${result2}`,
                  },
                ],
              });
            }
            if (followupPart.text) {
              finalText.push(followupPart.text);
            }
          }

          // 4) Segunda follow-up: lectura de datos de solo lectura
          const readOnlyQuery = await callLLM(conversationHistory);
          if (readOnlyQuery.text) finalText.push(readOnlyQuery.text);

          const finalData = readOnlyQuery.candidates?.[0];
          // 5) Procesa finalData parts
          if (finalData?.content?.parts)
            for (const data of finalData.content.parts) {
              if (!data.functionCall) continue;
              if (data.functionCall && data.functionCall.name) {
                const { name: fn3, args: args3 } = data.functionCall;
                toolCallNames.push({ name: fn3, args: args3 });
                const processData = await processFunctionCall(fn3, args3);

                conversationHistory.push({
                  role: "model",
                  parts: [{ functionCall: data.functionCall }],
                });
                conversationHistory.push({
                  role: "user",
                  parts: [{ text: `Datos de la tabla: ${processData}` }],
                });
              }
              // 6) Tercer follow-up
              let finalResponse = await callLLM(conversationHistory);
              if (finalResponse.functionCalls)
                toolCallNames.push({
                  name: finalResponse.functionCalls[0].name,
                  args: finalResponse.functionCalls[0].args,
                });
              if (finalResponse.text?.includes("error")) {
                // Reintentos controlados
                let retry = 0;
                const MAX = 3;
                while (
                  retry < MAX &&
                  (finalResponse.text ?? "").includes("error")
                ) {
                  retry++;
                  const errCand =
                    finalResponse.candidates?.[0]?.content?.parts ?? [];
                  for (const errPart of errCand) {
                    if (!errPart.functionCall) continue;
                    const dataRepeat = await processFunctionCall(
                      errPart.functionCall.name ?? "default_function_name",
                      errPart.functionCall.args
                    );
                    conversationHistory.push({
                      role: "user",
                      parts: [{ text: `Tablas: ${dataRepeat}` }],
                    });
                  }
                  finalResponse = await callLLM(conversationHistory);
                  if (finalResponse.text) finalText.push(finalResponse.text);
                }
                if (finalResponse.text?.includes("error")) {
                  console.warn(
                    "Se alcanzó el máximo de reintentos y aún hay error:",
                    finalResponse.text
                  );
                }
              } else if (finalResponse.text) {
                finalText.push(finalResponse.text);
              }
            }
        }
      } catch (error: any) {
        throw new AppError(
          `Error al procesar la consulta: ${error.message}`,
          500
        );
      }
    const finalResponseForLlm: ChatMessage[] = toolCallNames.map(
      (toolsCalls) => ({
        functionCall: { name: toolsCalls.name, args: toolsCalls.args },
        finalText: { text: finalText },
      })
    );
    conversationHistory.push({
      role: "user",
      parts: [
        {
          text: `Esta es la respuesta final, da una respuesta estructurada y bien explicada del resultado final explicando que se hizo PERO EVITANDO DARA RESPUESTAS DE DATOS SENSIBLES y demas cosas y si no se obtuvo una respuesta esperada hazle saber al usuario que reintente : ${finalResponseForLlm}, y este es el prompt de la consulta: ${query} determina si el resultado es el esperado y si no ejecuta de nuevo un tool_use para obtener el resultado esperado`,
        },
      ],
    });
    const endResponse = await callLLM(conversationHistory);

    if (endResponse.functionCalls) {
      await this.processQuery(query);
    }

    if (endResponse.text) {
      finalResponseForLlm.push({ finalText: { text: [endResponse.text] } });
      return finalResponseForLlm;
    }
    return finalResponseForLlm;
  }

  /** Cierra la conexión al MCP */
  async cleanup() {
    await this.mcp.close();
  }
}
