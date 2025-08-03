import { ContainerModule, interfaces } from "inversify";
import { ImagesController } from "../../controllers/image.controller";
import { ImageService } from "../../services/image.service";

export const ImageBinding = new ContainerModule((bind: interfaces.Bind) => {
  bind(ImagesController).toSelf();
  bind(ImageService).toSelf();
});
