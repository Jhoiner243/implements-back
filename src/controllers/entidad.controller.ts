import { Request } from "express";
import { inject } from "inversify";
import {
  Body,
  JsonController,
  Param,
  Post,
  Put,
  Req,
} from "routing-controllers";
import { EntidadService } from "../services/entidad.service";
import { RegisterEntidad } from "../ts/dtos/registerEntidadDto";

@JsonController()
export class EntidadController {
  constructor(@inject(EntidadService) private entidadService: EntidadService) {}

  @Post("/entidad-create")
  async entidadTheUser(@Body() data: RegisterEntidad) {
    const { message, data: datos } = await this.entidadService.createEntidad({
      data: {
        ...data,
        contactPhone: BigInt(data.contactPhone),
      },
    });
    return { message, datos };
  }

  @Put("/add-user")
  async addUserInEntidad(
    @Param("id") clerkId: string,
    @Body() idEntidad: string
  ) {
    const { message } = await this.entidadService.addUserInEntidad({
      clerkId,
      idEntidad,
    });

    return message;
  }

  @Post("/verification")
  async verificationEntidadById(@Body() idEntidad: string) {
    const { message, valid } =
      await this.entidadService.verificationEntidadById({
        idEntidad,
      });

    return { message, valid };
  }

  @Post("/delete-entidad")
  async deleteEntidad(@Req() req: Request) {
    try {
      const event = req.body;
      const {
        data: { id },
      } = event;
      console.log("BODY", req.body);

      console.log("EVENTO", event);
      const { message } = await this.entidadService.deleteOrganization({
        idEntidad: id,
      });

      return message;
    } catch (error) {
      console.error("Error en deleteEntidad:", error);
      throw new Error("Error al eliminar la entidad");
    }
  }
}
