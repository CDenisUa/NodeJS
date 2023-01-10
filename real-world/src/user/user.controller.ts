// Core
import { Body, Controller, Post } from "@nestjs/common";
// Services
import { UserService } from 'src/user/user.service';
// Data Transfer Objects
import { CreateUserDto } from "./dto/createUserDto.dto";

@Controller()
export class UserController {
    constructor(private readonly userService:UserService) {}
    @Post('users')
    async createUser(@Body('user') createUserDto: CreateUserDto): Promise<any> {
        console.log('createUserDto', createUserDto)
        return this.userService.createUser(createUserDto);
    }
}