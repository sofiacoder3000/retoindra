import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: String, example: 'adcd@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, example: 'myPassword' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ type: String, example: 'your_pseudo' })
  @IsNotEmpty()
  pseudo: string;
}
