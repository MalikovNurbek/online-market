import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { Product } from "./products/products.model";
import { ConfigModule } from "@nestjs/config";
import { CategoriesController } from './categories/categories.controller';
import { CategoriesModule } from './categories/categories.module';
import { Category } from "./categories/categories.model";
import { ProductCategory } from "./products/product-category.model";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { RolesService } from './roles/roles.service';
import { RolesController } from './roles/roles.controller';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { User } from "./users/users.model";
import { AuthModule } from "./auth/auth.module";
import { RateModule } from './rate/rate.module';
import { Rate } from "./rate/rate.model";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_HOST),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Product, Category, ProductCategory, Role, User, UserRoles, Rate],
      autoLoadModels: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/static'
    }),
    ProductsModule,
    CategoriesModule,
    UsersModule,
    RolesModule,
    AuthModule,
    RateModule,
  ],

})

// TODO .env PORT
export class AppModule {}
