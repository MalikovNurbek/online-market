import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./products.model";
import { CreateProductDto } from "./dto/create-product.dto";
import { CategoriesService } from "../categories/categories.service";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ListParamsDto } from "../utils/list-params.dto";
import { FindOptions } from "sequelize";
import { RateService } from "../rate/rate.service";
@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product)
              private productRepository: typeof Product,
              private categoryServices: CategoriesService,
              private rateServices: RateService,
  ) {}

  async createProduct(productDto: CreateProductDto, image: Express.Multer.File) {
    productDto.image = `${'localhost:5000/static/'}${image.filename}`;
    const product = await this.productRepository.create(productDto)
    const category = await this.categoryServices.getById(+productDto.categoryId)
    const rate = await this.rateServices.getRate()
    product.price.usd = product.price.ruble / rate
    await product.$set('category', [category.id])
    product.category = category
    return product
  }

  async getAll(listParams:ListParamsDto) {
    const attributes = ['id', 'title', 'description', 'price', 'inStock', 'tags', 'image', 'category.id', 'category.name']

    const options: FindOptions = {
      include: {all: true},
      limit:listParams.limit || 20,
      offset: listParams.offset || 0,
      attributes
    }
    const products = await this.productRepository.findAll(options)
    const rate = await this.rateServices.getRate()
    products.forEach((product) => {
      product.price.usd = product.price.ruble / rate
    })

    return products
  }

  async getOne(id: number) {
    const product = await this.productRepository.findByPk(id)
    const rate = await this.rateServices.getRate()
    product.price.usd = product.price.ruble / rate
    return product
  }

  async updateProduct(id: number, productBody: UpdateProductDto) {
    const updatedProduct = await this.productRepository.update({...productBody},{where:{id}})
    return updatedProduct
  }

  async deleteById(id: number) {
    const result = await this.productRepository.destroy({where: {id}})
    return result
  }

}
