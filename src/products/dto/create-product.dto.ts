import { PriceTypes, TitleAndDescriptionTypes } from "../types";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {

  // @IsString({message: "Поле 'title' должо быть строкой"})
  @ApiProperty({example: { en: 'гаджеты', ru: 'gadgets' }, description: 'title'})
  readonly title: TitleAndDescriptionTypes

  // @IsString({message: "Поле 'description' должо быть строкой"})
  @ApiProperty({example: { en: 'гаджеты', ru: 'gadgets' }, description: 'description'})
  readonly description: TitleAndDescriptionTypes

  // @IsNumber({},{message: "Поля 'usd и ruble' должны быть числом"})
  @ApiProperty({example: { usd: '12', ruble: '1400' }, description: 'price'})
  readonly price: PriceTypes

  // @IsNumber({},{message: "Поле 'categoryId' должо быть числом"})
  @ApiProperty({example: '1', description: 'category id'})
  readonly categoryId: number

  // @IsNumber({},{message: "Поле 'inStock' должо быть числом"})
  @ApiProperty({example: '1200', description: 'In stock'})
  readonly inStock: number

  @ApiProperty({example: ['phone', 'mobile', 'iphone', 'xs', '10'], description: 'Product tags'})
  readonly tags: string[]

  @ApiProperty({example: 'example/122/1/example.jpeg', description: 'Product image'}) // TODO надо поработать над файлом
  image: string
}