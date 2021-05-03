import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from '../../repositories/user.repository';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    create(createUserDto: CreateUserDto): Promise<{
        ok: boolean;
        data: {
            createdAt: string;
            updatedAt: string;
            title: string;
            category: string;
            id: any;
        };
    }>;
    findAll(): Promise<{
        ok: boolean;
        data: any[];
    }>;
    findOne(id: string): Promise<{
        ok: boolean;
        data: any;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
