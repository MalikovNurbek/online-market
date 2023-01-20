import { Body, Controller, Get, Put, Query } from '@nestjs/common';
import { RateService } from "./rate.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Курс')
@Controller('rate')
export class RateController {
  constructor(private rateService: RateService) {}


  @ApiOperation({summary: 'Получение курса'})
  @ApiResponse({status: 200})
  @Get()
  getRate() {
    return this.rateService.getRate()
  }

  @ApiOperation({summary: 'Изменение курса'})
  @ApiResponse({status: 200})
  @Put()
  updateRate(@Query("rate") newRate: number) {
    return this.rateService.updateRate(newRate)
  }

}
