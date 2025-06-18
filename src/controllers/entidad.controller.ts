import { inject } from "inversify";
import { Body, JsonController, Param, Post, Put } from "routing-controllers";
import { EntidadService } from "../services/entidad.service";
import { RegisterEntidad } from "../ts/dtos/registerEntidadDto";
import { BaseController } from "./base.controller";

@JsonController()
export class EntidadController implements BaseController {
  constructor(@inject(EntidadService) private entidadService: EntidadService) {}

  @Post("/entidad-create")
  async entidadTheUser(@Body() data: RegisterEntidad) {
    const { message, data: datos } = await this.entidadService.createEntidad({
      data: {
        ...data,
        contactPhone: BigInt(data.contactPhone),
      },
    });
    console.log("DATOSSS", datos);
    return { message, datos };
  }

  @Put("add-user")
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

  @Post("verification")
  async verificationEntidadById(@Body() idEntidad: string) {
    const { message, valid } =
      await this.entidadService.verificationEntidadById({
        idEntidad,
      });

    return { message, valid };
  }
}
