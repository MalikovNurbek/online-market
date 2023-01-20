import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
   @ApiProperty({example: 'example@gmail.com', description: 'Почтовый адрес'})
   @IsString({message: 'Должно быть строкой'})
   @IsEmail({},{message: 'Некорректный Email'})
   readonly email: string;

   @ApiProperty({example: '123456', description: 'Пароль'})
   @IsString({message: 'Должно быть строкой'})
   @Length(4, 16, {message: 'Длина пароля должна быть не меньше 4 и не больше 16 символов'})
   readonly password: string;
}