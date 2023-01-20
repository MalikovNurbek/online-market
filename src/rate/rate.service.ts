import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Rate } from "./rate.model";

@Injectable()
export class RateService {
  constructor(@InjectModel(Rate) private rateRepository: typeof Rate) {}

  async updateRate(rate: number,id:number=1) {
    const updatedRate = await this.rateRepository.update({rate}, {where:{id},returning:['rate']})
    return updatedRate
  }

  async getRate() {
    const rate = await this.rateRepository.findOne()
    return rate.rate
  }

}
