import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class SigninUserDto {
  @ApiProperty({ type: String })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  password: string;
}
