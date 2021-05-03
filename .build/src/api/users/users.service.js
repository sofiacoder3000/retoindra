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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const create_user_dto_1 = require("./dto/create-user.dto");
const class_transformer_1 = require("class-transformer");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createSimple(createUserDto) {
        const newUser = new user_entity_1.UserEntity();
        Object.keys(createUserDto).forEach((key) => {
            newUser[key] = createUserDto[key];
        });
        try {
            return await this.userRepository.save(newUser);
        }
        catch (err) {
            return err;
        }
    }
    async create(user) {
        const userEntity = new user_entity_1.UserEntity();
        userEntity.pseudo = user.pseudo;
        userEntity.password = user.password;
        userEntity.email = user.email;
        userEntity.role = 'user';
        let userCreated = await this.userRepository.save(userEntity);
        delete userCreated.password;
        return userCreated;
    }
    async findAll() {
        return await this.userRepository.find().then((items) => items.map((e) => class_transformer_1.plainToClass(create_user_dto_1.CreateUserDto, class_transformer_1.classToPlain(e), {
            excludeExtraneousValues: true,
        })));
    }
    async findById(id) {
        return await this.userRepository.findOne({ id });
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
    async findForAuth(email) {
        return await this.userRepository
            .createQueryBuilder('user')
            .select(['user.password', 'user.email', 'user.id', 'user.role'])
            .where('user.email = :email', { email: email })
            .getOne();
    }
    async findOne(user) {
        console.log(user);
        return await this.userRepository.findOne(user);
    }
    async findMe(userId) {
        return await this.userRepository
            .createQueryBuilder('user')
            .select(['user.id', 'user.email', 'user.role', 'user.pseudo'])
            .where('user.id = :userId', { userId })
            .getOne();
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map