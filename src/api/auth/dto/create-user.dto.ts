import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: String, example: 'adb@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  pseudo: string;
}
