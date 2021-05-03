import { CreateUserDto } from '../modules/user/dto/create-user.dto';
export declare class UserRepository {
    constructor();
    createUser(createUserDto: CreateUserDto): Promise<{
        ok: boolean;
        data: {
            createdAt: string;
            updatedAt: string;
            title: string;
            category: string;
            id: any;
        };
    }>;
    getUserById(id: string): Promise<{
        ok: boolean;
        data: any;
    }>;
    getUsers(): Promise<{
        ok: boolean;
        data: any[];
    }>;
}
