import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { CategoryCreationAttrs, CategoryTypes } from "./types";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "../products/products.model";


@Table({tableName: 'categories', createdAt: false, updatedAt: false})
export class Category extends Model<Category, CategoryCreationAttrs> {
  @ApiProperty({example: '1', description: 'Unique identifier'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({example: 'gadgets', description: 'Unique identifier'})
  @Column({ type: DataType.JSONB, unique: true })
  name: CategoryTypes

  @HasMany(() => Product)
  products: Product[]
}
