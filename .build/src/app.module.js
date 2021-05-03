"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const core_1 = require("@nestjs/core");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const people_module_1 = require("./api/people/people.module");
const users_module_1 = require("./api/users/users.module");
const auth_module_1 = require("./api/auth/auth.module");
const config_module_1 = require("./shared/config/config.module");
const auth_guard_1 = require("./shared/guards/auth.guard");
const config_service_1 = require("./shared/config/config.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_module_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.environment.database.host,
                    username: configService.environment.database.username,
                    password: configService.environment.database.password,
                    database: configService.environment.database.database,
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: configService.environment.database.synchronize,
                    charset: 'utf8mb4',
                }),
                inject: [config_service_1.ConfigService],
            }),
            people_module_1.PeopleModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            config_module_1.ConfigModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map