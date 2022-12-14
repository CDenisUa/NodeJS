import { TagEntity } from './tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// Core
import { Module } from '@nestjs/common';
// Controllers
import { TagController } from './tag.controller';
// Services
import { TagService } from './tag.service';

@Module({
    imports: [TypeOrmModule.forFeature([TagEntity])], 
    controllers: [TagController],
    providers: [TagService],
})
export class TagModule {

}