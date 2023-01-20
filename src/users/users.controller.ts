import { Body, Controller, Delete, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
import { Roles } from "../auth/roles-auth.decorator";
import { RoleGuard } from "../auth/role-guard";
import { AddRoleDto } from "./dto/add-role.dto";

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @ApiOperation({summary: 'Создание пользователя'})
  // @ApiResponse({status: 200, type: User})
  // @Post()
  // create(@Body() userDto: CreateUserDto) {
  //   return this.usersService.createUser(userDto)
  // }

  @ApiOperation({summary: 'Получить всех пользователей'})
  @ApiResponse({status: 200, type: [User]})
  @Roles('ADMIN')
  @UseGuards(RoleGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers()
  }

  @ApiOperation({summary: 'Получить пользователя по id'})
  @ApiResponse({status: 200, type: [User]})
  @Roles('ADMIN')
  @Get('/:id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getById(+id)
  }

  @ApiOperation({summary: 'Удалить пользователя по id'})
  @ApiResponse({status: 200, type: [User]})
  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteById(+id)
  }
  //
  // @ApiOperation({summary: 'Выдать роль'})
  // @ApiResponse({status: 200})
  // @Roles('ADMIN')
  // @UseGuards(RoleGuard)
  // @Post('/role')
  // addRole(@Body() dto: AddRoleDto) {
  //   return this.usersService.addRole(dto)
  // }

}