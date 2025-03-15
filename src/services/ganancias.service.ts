import { inject, injectable } from "inversify";
import { GananciasEntity } from "../entities/ganacias.entity";
import { GananciasRepository } from "../repositories/ganancias.repository";

@injectable()
export class GanaciasService {
  constructor(@inject(GananciasRepository) private gananciasRepository: GananciasRepository){}
  async getProfit(): Promise<GananciasEntity[]> {
    const profit = await this.gananciasRepository.getProfit()
    return profit
  }
}