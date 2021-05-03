import { Injectable, HttpService } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { PersonDto } from './dto/person.dto';

@Injectable()
export class PeopleService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<PersonDto[]> {
    const response = await this.httpService.get('/').toPromise();
    return response.data.results.map((item) =>
      plainToClass(PersonDto, item, {
        excludeExtraneousValues: true,
      }),
    );
  }

  async findById(id: number): Promise<PersonDto> {
    const response = await this.httpService.get(`/${id}/`).toPromise();
    return await plainToClass(PersonDto, response.data, {
      excludeExtraneousValues: true,
    });
  }
}
