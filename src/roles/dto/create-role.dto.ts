import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {

  @ApiProperty({example: 'USER', description: 'Название роли'})
  readonly value: string;

  @ApiProperty({example: 'Обычный пользователь', description: 'Краткое описание роли'})
  readonly description: string;
}