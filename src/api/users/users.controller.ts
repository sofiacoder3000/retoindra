import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { AuthUser } from '../../shared/decorators/auth-user.decorator';
import { Roles } from '../../shared/decorators/roles.decorators';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createSimple(createUserDto);
  }

  @Get()
  async findAll(): Promise<CreateUserDto[]> {
    const users = await this.usersService.findAll();
    if (!users) {
      throw new NotFoundException(`Users not found`);
    }
    return users;
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<any> {
    const user = await this.usersService.findById(+id);
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Get('me')
  @Roles('user', 'premium', 'admin')
  async getMe(@AuthUser() user: JwtPayload): Promise<User> {
    return await this.usersService.findMe(user.id);
  }
}
