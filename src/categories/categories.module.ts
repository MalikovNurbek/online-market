import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from "./categories.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Category } from "./categories.model";
import { Product } from "../products/products.model";
import { ProductCategory } from "../products/product-category.model";

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    SequelizeModule.forFeature([Category, Product, ProductCategory])
  ],
  exports: [CategoriesService]
})
export class CategoriesModule {}
