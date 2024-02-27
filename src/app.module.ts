import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemoModule } from './memo/memo.module';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { SysConfigModule } from './sys-config/sys-config.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MemoModule,
    UserModule,
    TagModule,
    SysConfigModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '12345678',
      database: 'mblog',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
