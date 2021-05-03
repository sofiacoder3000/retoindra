import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createSimple(createUserDto: CreateUserDto): Promise<User>;
    create(user: User): Promise<User>;
    findAll(): Promise<CreateUserDto[]>;
    findById(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
    findForAuth(email: string): Promise<User>;
    findOne(user: User): Promise<User>;
    findMe(userId: any): Promise<User>;
}
