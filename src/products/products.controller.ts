import {
  Body,
  Controller, Delete,
  Get,
  Param,
  Patch,
  Post, Query,
  UploadedFile, UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "./products.model";
import { FileInterceptor } from "@nestjs/platform-express";
import { Express } from 'express'
import { diskStorage } from "multer";
import { RoleGuard } from "../auth/role-guard";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ListParamsDto } from "../utils/list-params.dto";

@ApiTags('Продукты')
@Controller('products')
export class ProductsController {
  constructor(private productsServices: ProductsService) {}

  @ApiOperation({summary: 'Создание продукта'})
  @ApiResponse({status: 200, type: Product})
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/',
      filename: (req, file, cb) => {
        const fileNameSplit = file.originalname.split('.');
        const fileExt = fileNameSplit[fileNameSplit.length - 1];
        cb(null, `${Date.now()}.${fileExt}`);
      }
    })
    })
  )
  @UseGuards(RoleGuard)
  @Post()
  createProduct(
    @Body() productDto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File) {
    return this.productsServices.createProduct(productDto, file)
  }

  @ApiOperation({summary: 'Получение всех продуктов'})
  @ApiResponse({status: 200, type: Product})
  @Get()
  getAllProducts(@Query() listParams:ListParamsDto) {
    return this.productsServices.getAll(listParams)
  }

  @ApiOperation({summary: 'Получение продукта по id'})
  @ApiResponse({status: 200, type: Product})
  @Get('/:id')
  getProductById(@Param('id') id: string) {
    return this.productsServices.getOne(+id)
  }

  @ApiOperation({summary: 'Изменение продукта по id'})
  @ApiResponse({status: 200, type: Product})
  @Patch('/:id')
  updateProductById(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto) {
    return this.productsServices.updateProduct(+id, updateProductDto)
  }

  @ApiOperation({summary: 'Удаление продукта по id'})
  @ApiResponse({status: 200, type: Product})
  @Delete('/:id')
  deleteProductById(@Param('id') id: string) {
    return this.productsServices.deleteById(+id)
  }
}
