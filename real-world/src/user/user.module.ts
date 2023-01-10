// Core
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
// Services
import { UserService } from 'src/user/user.service';
// Controllers
import { UserController } from './user.controller';
// Entities
// import { UserEntity } from './user.entity';


@Module ({
    // imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService],
})

export class UserModule {

}