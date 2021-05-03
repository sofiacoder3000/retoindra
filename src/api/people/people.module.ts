import { Module, HttpModule } from '@nestjs/common';
import { PeopleController } from './people.controller';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://swapi.py4e.com/api/people',
    }),
  ],
  controllers: [PeopleController],
})
export class PeopleModule {}
