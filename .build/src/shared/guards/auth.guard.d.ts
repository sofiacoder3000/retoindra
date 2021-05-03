import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '../config/config.service';
export declare class AuthGuard implements CanActivate {
    private readonly reflector;
    private config;
    constructor(reflector: Reflector, config: ConfigService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
