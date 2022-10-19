import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "user@gmail.com", description: "Почтовый адрес" })
  readonly email: string;
  @ApiProperty({ example: "A12345678*", description: "Пароль пользователя" })
  readonly password: string;
}
