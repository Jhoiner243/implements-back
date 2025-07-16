import { ContainerModule, interfaces } from "inversify";
import { AuthController } from "../../controllers/auth.controller";
import { AuthRepository } from "../../repositories/auth.repository";
import { AuthService } from "../../services/auth.service";
import { BaseRepository } from "../../utils/tenant-id";

export const authBinding = new ContainerModule((bind: interfaces.Bind) => {
  bind(AuthService).toSelf();
  bind(AuthRepository).toSelf();
  bind(AuthController).toSelf();
  bind(BaseRepository).toSelf();
});
