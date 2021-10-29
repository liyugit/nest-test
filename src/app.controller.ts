import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AppDto } from './app.dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    const list = await this.appService.findAll();
    console.log('list:' + list);
    return list;
  }
  @Post()
  async create(@Body() body: AppDto) {
    try {
      const res = await this.appService.saveData(body);
      return {
        code: 0,
        data: {
          id: res.id,
        },
      };
    } catch (e) {
      return e;
    }
  }
}
