import { User } from '../interfaces/user.interface';
export declare class UserEntity implements User {
    id: number;
    pseudo: string;
    email: string;
    password: string;
    role: 'user' | 'premium' | 'admin';
}
