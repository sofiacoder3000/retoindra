import { Module, HttpModule } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://swapi.py4e.com/api/people',
    }),
  ],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
