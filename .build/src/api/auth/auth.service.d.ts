import { ConfigService } from '../../shared/config/config.service';
import { User } from '../users/interfaces/user.interface';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private userService;
    private config;
    private saltRounds;
    constructor(userService: UsersService, config: ConfigService);
    signUp(user: User): Promise<User>;
    signIn(email: string, password: string): Promise<User>;
    createToken(user: User): Promise<string>;
}
