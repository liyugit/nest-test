import { Injectable } from '@nestjs/common';
import { AppEntity } from './app.entity';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async findAll() {
    return await AppEntity.find({});
  }
  async saveData(body: any) {
    const appEntity = new AppEntity();
    AppEntity.merge(appEntity, body);
    return await appEntity.save();
  }
}
