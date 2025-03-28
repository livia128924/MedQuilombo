import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Hello World' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  @ApiOperation({ summary: 'Get Users' })
  async getUsers() {
    return await this.appService.getUsers();
  }
}
