// Core
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
// Controllers
import { TagController } from './tag.controller';
// Services
import { TagService } from './tag.service';
// Entities
import { TagEntity } from './tag.entity';


@Module({
    imports: [TypeOrmModule.forFeature([TagEntity])], 
    controllers: [TagController],
    providers: [TagService],
})
export class TagModule {

}