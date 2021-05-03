import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { PeopleService } from './people.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@ApiTags('People')
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  @ApiResponse({ type: CreatePersonDto, status: 201 })
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.peopleService.create(createPersonDto);
  }

  @Get()
  @ApiResponse({ type: CreatePersonDto, isArray: true, status: 200 })
  findAll() {
    return this.peopleService.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: CreatePersonDto, status: 200 })
  findOne(@Param('id') id: string) {
    return this.peopleService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ type: UpdatePersonDto, status: 200 })
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.peopleService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200 })
  remove(@Param('id') id: string) {
    return this.peopleService.remove(+id);
  }
}
