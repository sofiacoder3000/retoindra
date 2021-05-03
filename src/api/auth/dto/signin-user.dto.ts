import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class SigninUserDto {
  @ApiProperty({ type: String, example: 'adcd@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, example: 'myPassword' })
  @IsNotEmpty()
  password: string;
}
