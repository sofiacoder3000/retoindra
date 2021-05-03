import { User } from '../users/interfaces/user.interface';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SigninUserDto } from './dto/signin-user.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
export declare class AuthController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    signIn(body: SigninUserDto): Promise<{
        token: string;
    }>;
    signUp(createUserDto: CreateUserDto): Promise<{
        success: boolean;
    }>;
    refreshToken(user: JwtPayload): Promise<{
        me: User;
        token: string;
    }>;
    emailFree(params: any): Promise<{
        success: boolean;
    }>;
}
