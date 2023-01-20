import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CategoriesService } from "./categories.service";
import { Category } from "./categories.model";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { Product } from "../products/products.model";

@ApiTags('Категории')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesServices: CategoriesService) {}

  @ApiOperation({summary: 'Создание категории'})
  @ApiResponse({status: 200, type: Category})
  @Post()
  createProduct(@Body() categoryDto: CreateCategoryDto) {
    return this.categoriesServices.createCategory(categoryDto)
  }

  @ApiOperation({summary: 'Получение всех категорий'})
  @Get()
  getAllCategories() {
    return this.categoriesServices.getAll()
  }

  @ApiOperation({summary: 'Получение категории по id'})
  @ApiResponse({status: 200, type: Product})
  @Get('/:id')
  getCategoryById(@Param('id') id: string) {
    return this.categoriesServices.getById(+id)
  }
}
