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
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const environment_dev_1 = require("../../environments/environment.dev");
const environment_staging_1 = require("../../environments/environment.staging");
const environment_prod_1 = require("../../environments/environment.prod");
let ConfigService = class ConfigService {
    constructor() {
        common_2.Logger.log(`Configuration : ${process.env.ENV || 'DEV'}`);
        switch (process.env.ENV) {
            case 'PROD':
                this.environment = environment_prod_1.environment;
                break;
            case 'STAGING':
                this.environment = environment_staging_1.environment;
                break;
            default:
                this.environment = environment_dev_1.environment;
                break;
        }
    }
};
ConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map