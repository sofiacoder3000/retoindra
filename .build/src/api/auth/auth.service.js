"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config_service_1 = require("../../shared/config/config.service");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(userService, config) {
        this.userService = userService;
        this.config = config;
        this.saltRounds = 10;
    }
    async signUp(user) {
        user.password = await bcrypt.hash(user.password, this.saltRounds);
        return await this.userService.create(user);
    }
    async signIn(email, password) {
        const user = await this.userService.findForAuth(email);
        if (!user)
            return null;
        const match = await bcrypt.compare(password, user.password);
        if (!match)
            return null;
        return user;
    }
    async createToken(user) {
        const jwtPayload = {
            id: user.id,
            email: user.email,
            role: user.role,
        };
        return await jwt.sign(jwtPayload, this.config.environment.secretKey, {
            expiresIn: '365d',
        });
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        config_service_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map