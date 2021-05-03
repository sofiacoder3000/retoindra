import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String, example: 'your_pseudo' })
  @IsNotEmpty()
  pseudo: string;

  @ApiProperty({ type: String, example: 'abcd@gmail.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, example: 'myPassword' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ type: String, example: 'premium', default: 'user' })
  @IsNotEmpty()
  role: 'user' | 'premium' | 'admin';
}
