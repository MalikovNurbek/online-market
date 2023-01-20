import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Category } from "../categories/categories.model";
import { Product } from "./products.model";

@Table({tableName: 'products-category', createdAt: false, updatedAt: false})
export class ProductCategory extends Model<ProductCategory> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @ForeignKey(() => Category)
  @Column({ allowNull: false })
  categoryId: number

  @ForeignKey(() => Product)
  @Column({ allowNull: false })
  productId: number

}
