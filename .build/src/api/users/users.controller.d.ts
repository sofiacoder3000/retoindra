import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<CreateUserDto[]>;
    findById(id: number): Promise<any>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
    getMe(user: JwtPayload): Promise<User>;
}
