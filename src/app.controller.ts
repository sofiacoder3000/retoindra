import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from '@nestjs/swagger';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({ status: HttpStatus.OK, description: 'Ok!' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Data undefined' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Server error',
  })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
