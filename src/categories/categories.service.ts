import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "./categories.model";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category) private categoryRepository: typeof Category) {}

  async createCategory(categoryDto: CreateCategoryDto) {
    const category = await this.categoryRepository.create(categoryDto)
    return category
  }

  async getAll() {
    const attributes = ['id', 'name', 'products.id']
    const categories = await this.categoryRepository.findAll()
    return categories
  }

  async getById(id: number) {
    const category = await this.categoryRepository.findByPk(id)
    return category
  }
}
