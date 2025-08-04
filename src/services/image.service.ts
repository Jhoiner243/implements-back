// src/services/image.service.ts
import { GoogleGenAI } from "@google/genai";
import { inject, injectable } from "inversify";
import { ClienteCacheService } from "../cache/cliente.cache";
import { GOOGLE_API_KEY } from "../config/configs";
import { TYPESCACHE } from "../containers/bindings/cache.binding";
import { withRequestContext } from "../frameworks/db/middleware";
import { FacturaRepository } from "../repositories/factura.repository";
import { UploadImageDTO } from "../ts/dtos/uploadDto";
import { BaseRepository } from "../utils/tenant-id";
import { FacturaService } from "./factura.service";

@injectable()
export class ImageService extends BaseRepository {
  private llm: GoogleGenAI;

  constructor(
    @inject(FacturaRepository) private facturaRepository: FacturaRepository,
    @inject(FacturaService) private facturaService: FacturaService,
    @inject(TYPESCACHE.ClienteCacheService)
    private clientCache: ClienteCacheService
  ) {
    super();
    this.llm = new GoogleGenAI({ apiKey: GOOGLE_API_KEY });
  }

  /**
   * Procesa la imagen de la factura y extrae datos clave (fecha, montos, ítems).
   */
  public async processImage(image: UploadImageDTO, id: string) {
    if (!image.file) {
      throw new Error("No se ha subido ninguna imagen");
    }
    const buffer = image.file.buffer;
    const mime = image.file.mimetype;

    // Creamos un prompt multimodal: le decimos a Gemini qué extraer
    const contents = [
      {
        parts: [
          {
            text: `Extrae de esta factura en imagen y devuelve un JSON con la siguiente estructura exacta:
        {
          "fecha": "YYYY-MM-DD",
          "numeroFactura": "string",
          "total": number,
          "productos": [
            {
              "nombre": "string",
              "cantidad": number,
              "precio": number
            }
          ],
          "cliente": {
            "nombre": "string (opcional)",
            "email": "string (opcional)",
            "telefono": "string (opcional)",
            "direccion": "string (opcional)"
          }
        }
        
        Asegúrate de que la respuesta sea un JSON válido.`,
          },
          {
            inlineData: {
              mimeType: mime,
              data: buffer.toString("base64"),
            },
          },
        ],
      },
    ];

    try {
      // Llamada a Gemini multimodal
      const response = await this.llm.models.generateContent({
        model: "gemini-2.0-flash",
        contents,
      });

      // Obtener el texto de la respuesta
      const responseText = response.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!responseText) {
        throw new Error("No se pudo obtener texto de la respuesta de Gemini");
      }

      // Limpiar la respuesta para extraer solo el JSON
      const cleanJsonText = this.extractJsonFromResponse(responseText);

      // Parsear la respuesta JSON
      let parsed;
      try {
        parsed = JSON.parse(cleanJsonText);
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
        console.error("Raw response text:", responseText);
        console.error("Clean JSON text:", cleanJsonText);
        throw new Error("Respuesta de Gemini no es JSON válido");
      }

      // Validar la respuesta usando el repositorio
      const validatedData = await this.facturaRepository.validateGeminiResponse(
        parsed
      );

      // Procesar y guardar en base de datos
      await withRequestContext(id, async () => {
        const result = await this.facturaRepository.processGeminiResponse({
          geminiData: validatedData,
          tenantId: id,
        });

        await this.clientCache.invalidateClienteListCache();

        await this.facturaService.dataFact(result.factura);
        return {
          success: true,
          message: "Factura procesada y guardada exitosamente",
          data: validatedData,
          factura: result.factura,
        };
      });
    } catch (error) {
      console.error("Error procesando imagen:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";
      throw new Error(`Error al procesar imagen de factura: ${errorMessage}`);
    }
  }

  /**
   * Procesa solo la imagen sin guardar en base de datos (para preview)
   */
  public async processImagePreview(image: UploadImageDTO) {
    if (!image.file) {
      throw new Error("No se ha subido ninguna imagen");
    }
    const buffer = image.file.buffer;
    const mime = image.file.mimetype;

    const contents = [
      {
        parts: [
          {
            text: `Extrae de esta factura en imagen y devuelve un JSON con la siguiente estructura exacta:
        {
          "fecha": "YYYY-MM-DD",
          "numeroFactura": "string",
          "total": number,
          "productos": [
            {
              "nombre": "string",
              "cantidad": number,
              "precio": number
            }
          ],
          "cliente": {
            "nombre": "string (opcional)",
            "email": "string (opcional)",
            "telefono": "string (opcional)",
            "direccion": "string (opcional)"
          }
        }
        
        Asegúrate de que la respuesta sea un JSON válido.`,
          },
          {
            inlineData: {
              mimeType: mime,
              data: buffer.toString("base64"),
            },
          },
        ],
      },
    ];

    try {
      const response = await this.llm.models.generateContent({
        model: "gemini-2.0-flash",
        contents,
      });

      // Obtener el texto de la respuesta
      const responseText = response.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!responseText) {
        throw new Error("No se pudo obtener texto de la respuesta de Gemini");
      }

      // Limpiar la respuesta para extraer solo el JSON
      const cleanJsonText = this.extractJsonFromResponse(responseText);

      let parsed;
      try {
        parsed = JSON.parse(cleanJsonText);
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
        console.error("Raw response text:", responseText);
        console.error("Clean JSON text:", cleanJsonText);
        throw new Error("Respuesta de Gemini no es JSON válido");
      }

      // Solo validar, no guardar
      const validatedData = await this.facturaRepository.validateGeminiResponse(
        parsed
      );

      return {
        success: true,
        message: "Datos extraídos correctamente (preview)",
        data: validatedData,
      };
    } catch (error) {
      console.error("Error procesando preview de imagen:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";
      throw new Error(`Error al procesar preview de imagen: ${errorMessage}`);
    }
  }

  /**
   * Extrae JSON de la respuesta de Gemini que puede estar envuelta en markdown
   */
  private extractJsonFromResponse(responseText: string): string {
    // Buscar JSON envuelto en ```json ... ```
    const jsonBlockMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonBlockMatch) {
      return jsonBlockMatch[1].trim();
    }

    // Buscar JSON envuelto en ``` ... ```
    const codeBlockMatch = responseText.match(/```\s*([\s\S]*?)\s*```/);
    if (codeBlockMatch) {
      return codeBlockMatch[1].trim();
    }

    // Si no hay bloques de código, intentar encontrar JSON directamente
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return jsonMatch[0].trim();
    }

    // Si no se encuentra JSON, devolver el texto original
    return responseText.trim();
  }
}
