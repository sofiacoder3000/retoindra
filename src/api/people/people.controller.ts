import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { PersonDto } from './dto/person.dto';
import { PeopleService } from './people.service';

@ApiTags('People')
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  @ApiResponse({ type: PersonDto, isArray: true, status: 200 })
  async findAll(): Promise<PersonDto[]> {
    return await this.peopleService.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: PersonDto, status: 200 })
  async findById(@Param('id', ParseIntPipe) id: number): Promise<PersonDto> {
    return await this.peopleService.findById(+id);
  }
}
