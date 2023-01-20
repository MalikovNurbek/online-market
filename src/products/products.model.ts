import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { PriceTypes, ProductCreationAttrs, TitleAndDescriptionTypes } from "./types";
import { Category } from "../categories/categories.model";
import { IsOptional } from "class-validator";

@Table({tableName: 'products', createdAt: false, updatedAt: false})
export class Product extends Model<Product, ProductCreationAttrs> {

  @ApiProperty({example: '1', description: 'Unique identifier'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @ApiProperty({example: { ru: 'Iphone XS, gray, 256gb, 2017y', en: 'Iphone XS, gray, 256gb, 2017y'},description: 'Unique identifier'})
  @Column({ allowNull: false, type: DataType.JSONB})
  title: TitleAndDescriptionTypes

  @ApiProperty({example: { ru: 'Лорем ипсум легкий дамми текст оф зе принтинг', en: 'Lorem Ipsum is simply dummy text of the printing'}, description: 'description of product'})
  @Column({ allowNull: false, type: DataType.JSONB})
  description: TitleAndDescriptionTypes

  @ApiProperty({example: {usd: 12, ruble: 1234}, description: 'Product price'})
  @Column({allowNull: false, type: DataType.JSONB})
  price: PriceTypes

  @ApiProperty({example: ['phone', 'mobile', 'iphone', 'xs', '10'], description: 'Product tags'})
  @Column({allowNull: false, type: DataType.JSONB})
  tags: string[]

  @ApiProperty({example: '2312', description: 'Product in stock'})
  @Column({type: DataType.INTEGER, allowNull: false})
  inStock: number

  @ApiProperty({example: 'https://telefon.kg/image/cache/catalog/Products/Phones/Apple/Iphone%20X/black/1-500x500.jpg',
    description: "Product's image"})
  @Column({allowNull: false, type: DataType.STRING})
  image: string

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  categoryId: number

  @ApiProperty({example: {id: 1, name: {en: 'gadgets', ru: 'гаджеты'}}, description: "Product's image"})
  @BelongsTo(() => Category)
  category : Category;
}
