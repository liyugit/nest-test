import { IsNotEmpty, IsString } from 'class-validator';

export class AppDto {
  @IsNotEmpty({ message: '业务线标识不能为空' })
  @IsString()
  name: string;

  @IsString()
  description: string;
}
