import {
  Controller,
  Get,
  Param,
  HttpService,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { PersonDto } from './dto/person.dto';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    const response = await this.httpService.get(`/${id}/`).pipe(
      map((axiosResponse: AxiosResponse) => {
        return axiosResponse.data;
      }),
    );
    return response;
  }
}
