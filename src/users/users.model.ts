import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";
import { UserCreationAttrs } from "./types";


@Table({tableName: 'users', updatedAt: false, createdAt: false})
export class User extends Model<User, UserCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'example.@gmail.com', description: 'Почтовый адрес'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  // @ApiProperty({example: '1234561', description: 'Пароль'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  token: string

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}