import { Request, Response } from "express";
import { inject } from "inversify";
import { Controller, Post, Req, Res, UseBefore } from "routing-controllers";
import { HasPermission } from "../frameworks/get-auth";
import { ImageService } from "../services/image.service";
import upload from "../utils/upload";
import { BaseController } from "./base.controller";

@Controller()
export class ImagesController implements BaseController {
  constructor(@inject(ImageService) private imageService: ImageService) {}

  @Post("/image/process")
  @UseBefore(upload.single("image"))
  @UseBefore(HasPermission)
  async processImage(@Req() req: Request, @Res() res: Response) {
    try {
      const image = req.file;
      const { orgId } = req.body;

      if (!image) {
        return res.status(400).json({
          success: false,
          message: "No se ha subido ninguna imagen",
        });
      }

      await this.imageService.processImage({ file: image }, orgId);

      return res
        .status(200)
        .json({ message: "Imagen procesada correctamente" });
    } catch (error) {
      console.error("Error en processImage:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";

      return res.status(500).json({
        success: false,
        message: `Error al procesar imagen: ${errorMessage}`,
      });
    }
  }

  @Post("/image/preview")
  @UseBefore(upload.single("image"))
  async previewImage(@Req() req: Request, @Res() res: Response) {
    try {
      const image = req.file;
      if (!image) {
        return res.status(400).json({
          success: false,
          message: "No se ha subido ninguna imagen",
        });
      }

      const result = await this.imageService.processImagePreview({
        file: image,
      });

      return res.status(200).json(result);
    } catch (error) {
      console.error("Error en previewImage:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";

      return res.status(500).json({
        success: false,
        message: `Error al procesar preview de imagen: ${errorMessage}`,
      });
    }
  }

  // Mantener el endpoint original para compatibilidad
  @Post("/image")
  @UseBefore(upload.single("image"))
  async createImage(@Req() req: Request, @Res() res: Response) {
    try {
      const image = req.file;
      const { orgId } = req.body;
      if (!image) {
        return res.status(400).json({
          success: false,
          message: "No se ha subido ninguna imagen",
        });
      }

      const result = await this.imageService.processImage(
        { file: image },
        orgId
      );

      return res.status(200).json(result);
    } catch (error) {
      console.error("Error en createImage:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";

      return res.status(500).json({
        success: false,
        message: `Error al procesar imagen: ${errorMessage}`,
      });
    }
  }
}
