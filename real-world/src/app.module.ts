// Core
import ormconfig from './ormconfig';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// Modules
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
// Controllers
import { AppController } from './app.controller';
// Services
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TagModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
