import { Module } from '@nestjs/common';
import { RateController } from './rate.controller';
import { RateService } from './rate.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Rate } from "./rate.model";

@Module({
  controllers: [RateController],
  providers: [RateService],
  exports: [RateService],
  imports: [SequelizeModule.forFeature([Rate])]
})
export class RateModule {}
