import { inject } from "inversify";
import { Body, JsonController, Param, Post, Put } from "routing-controllers";
import { EntidadService } from "../services/entidad.service";
import { RegisterEntidad } from "../ts/dtos/registerEntidadDto";

@JsonController("/entidad-")
export class EntidadController {
  constructor(@inject(EntidadService) private entidadService: EntidadService) {}

  @Post("create")
  async entidadTheUser(@Body() data: RegisterEntidad) {
    const { message } = await this.entidadService.createEntidad({ data });
    return message;
  }

  @Put("add-user")
  async addUserInEntidad(
    @Param("id") clerkId: string,
    @Param("idEntidad") idEntidad: string
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
