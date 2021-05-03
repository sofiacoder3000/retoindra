import {
  Controller,
  Get,
  Param,
  HttpService,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { PersonDto } from './dto/person.dto';

@ApiTags('People')
@Controller('people')
export class PeopleController {
  constructor(private readonly httpService: HttpService) {}

  @Get()
  @ApiResponse({ type: PersonDto, isArray: true, status: 200 })
  async findAll(): Promise<any> {
    const response = await this.httpService.get('/').toPromise();
    return response.data;
  }

  @Get(':id')
  @ApiResponse({ type: PersonDto, status: 200 })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<any> {
    const response = await this.httpService.get(`/${id}/`).toPromise();
    return response.data;
  }
}
