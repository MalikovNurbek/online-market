import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from "./products.controller";
import { Product } from "./products.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { Category } from "../categories/categories.model";
import { ProductCategory } from "./product-category.model";
import { CategoriesModule } from "../categories/categories.module";
import { MulterModule } from "@nestjs/platform-express";
import { JwtService } from "@nestjs/jwt";
import { Rate } from "../rate/rate.model";
import { RateModule } from "../rate/rate.module";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, JwtService],
  imports: [
    SequelizeModule.forFeature([Product, Category, ProductCategory, Rate]),
    CategoriesModule,
    RateModule,
    MulterModule.register({
      dest: './upload',
    })
  ],
  exports:[ProductsService, JwtService]
})
export class ProductsModule {}
