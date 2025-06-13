import { BillingCycle, typePlan } from "@prisma/client";
import { inject, injectable } from "inversify";
import { EntidadesRepository } from "../repositories/entidades.repository";
import { RegisterEntidad } from "../ts/dtos/registerEntidadDto";
import { EntidadSchema } from "../ts/validations/entidad.validations";
import { AppError } from "../utils/errors/app-errors";

@injectable()
export class EntidadService {
  constructor(
    @inject(EntidadesRepository)
    private entidadRepository: EntidadesRepository
  ) {}

  // 🔹 Lógica del límite por plan
  private getLimitByPlan(typePlan: typePlan): number | undefined {
    const limits: Record<typePlan, number | undefined> = {
      Gratuito: 10,
      Basico: 30,
      Premium: undefined, // sin límite
    };

    return limits[typePlan];
  }

  // 🔹 Crear entidad
  async createEntidad({
    data,
  }: {
    data: RegisterEntidad;
  }): Promise<{ message: string }> {
    const validDataEntidad = EntidadSchema.parse(data);

    const existEntidad = await this.entidadRepository.entidadByName(
      data.nombre
    );
    if (existEntidad) {
      throw new AppError("El nombre de esta entidad ya existe", 400);
    }

    await this.entidadRepository.createEntidad({
      data: {
        ...validDataEntidad,
        typePlan: validDataEntidad.typePlan as typePlan,
        billingCycle: validDataEntidad.billingCycle as BillingCycle,
      },
    });

    return { message: "Entidad creada correctamente" };
  }

  // 🔹 Agregar usuario a entidad
  async addUserInEntidad({
    clerkId,
    idEntidad,
  }: {
    clerkId: string;
    idEntidad: string;
  }): Promise<{ message: string }> {
    if (!clerkId) throw new AppError("Falta id de usuario", 400);

    const entidad = await this.entidadRepository.verificationEntidadById({
      idEntidad,
    });

    if (!entidad) throw new AppError("Entidad no encontrada", 404);

    const usuariosActuales = entidad.users ?? [];
    const limiteUsuarios = this.getLimitByPlan(entidad.typePlan);

    if (
      limiteUsuarios !== undefined &&
      usuariosActuales.length >= limiteUsuarios
    ) {
      throw new AppError(
        "Se alcanzó el límite de usuarios para este plan",
        403
      );
    }

    // Aquí se debería agregar el usuario a la entidad
    await this.entidadRepository.addUserInEntidad({ clerkId, idEntidad });

    return { message: "Usuario agregado con éxito" };
  }

  // 🔹 Verificar existencia de entidad
  async verificationEntidadById({
    idEntidad,
  }: {
    idEntidad: string;
  }): Promise<{ message: string; valid: boolean; name?: string }> {
    if (!idEntidad || typeof idEntidad !== "string") {
      throw new AppError("Error al obtener el id", 404);
    }

    const entidad = await this.entidadRepository.verificationEntidadById({
      idEntidad,
    });

    if (entidad) {
      return {
        name: entidad.nombre,
        valid: true,
        message: "La verificación fue exitosa",
      };
    }

    return {
      valid: false,
      message: "El id no es correcto.",
    };
  }
}
