import { clerkClient } from "@clerk/express";
import { BillingCycle, typePlan } from "@prisma/client";
import { inject, injectable } from "inversify";
import { EntidadesRepository } from "../repositories/entidades.repository";
import { CreatedEntity, RegisterEntidad } from "../ts/dtos/registerEntidadDto";
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
  }): Promise<{ message: string; data?: CreatedEntity }> {
    const validDataEntidad = EntidadSchema.parse(data);

    const existEntidad = await this.entidadRepository.entidadByName(
      data.nombre
    );
    if (existEntidad) {
      throw new AppError("El nombre de esta entidad ya existe", 400);
    }

    //Creamos la organizacion en clerk
    const response = await clerkClient.organizations.createOrganization({
      name: data.nombre,
      createdBy: data.createBy,
      publicMetadata: {
        typePlan: data.typePlan,
        billingCycle: data.billingCycle,
        industry: data.industry,
        contactPhone: data.contactPhone,
        billingEmail: data.billingEmail,
        billingAddress: data.billingAddress,
      },
    });

    //Luego procedemos a guardar los datos en nuestra base de datos
    if (response && response.createdBy) {
      await this.entidadRepository.createEntidad({
        data: {
          organizationId: response.id,
          createBy: response.createdBy,
          ...validDataEntidad,
          typePlan: validDataEntidad.typePlan as typePlan,
          billingCycle: validDataEntidad.billingCycle as BillingCycle,
        },
      });

      // Obtener la entidad recién creada para devolver los campos requeridos
      const entidadCreada = await this.entidadRepository.entidadByName(
        data.nombre
      );

      if (!entidadCreada) {
        throw new AppError("No se pudo obtener la entidad recién creada", 500);
      }

      return {
        message: "Entidad creada correctamente",
        data: {
          id: entidadCreada.id,
          nombre: entidadCreada.nombre,
          createBy: entidadCreada.createBy,
          organizationId: entidadCreada.organizationId,
          typePlan: entidadCreada.typePlan,
          billingCycle: entidadCreada.billingCycle,
          industry: entidadCreada.industry,
          contactPhone: entidadCreada.contactPhone,
          billingEmail: entidadCreada.billingEmail,
          billingAddress: entidadCreada.billingAddress,
          createdAt: entidadCreada.createdAt,
          status: "active",
        },
      };
    }

    return {
      message: "Error al crear la entidad",
    };
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
