import { IsNumberString, IsOptional } from "class-validator";
export class ListParamsDto {
  @IsNumberString()
  @IsOptional()
  limit:number

  @IsNumberString()
  @IsOptional()
  offset:number



}