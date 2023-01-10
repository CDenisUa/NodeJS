// Core
import { Injectable } from "@nestjs/common";
// Data Transfer Objects
import { CreateUserDto } from './dto/createUserDto.dto';

@Injectable()
export class UserService {
    async createUser(createUserDto: CreateUserDto) {
        return createUserDto;
    }
}