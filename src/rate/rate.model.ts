import { Column, DataType, Default, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { RateCreationAttrs } from "./types";

@Table({tableName: 'rate', updatedAt: false, createdAt: false})
export class Rate extends Model<Rate, RateCreationAttrs> {
  @ApiProperty({example: '85.5', description: 'Курс доллара'})
  @Column({type: DataType.DOUBLE})
  rate: number
}