import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';
import { User } from './interfaces/user.interface';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { plainToClass, classToPlain } from 'class-transformer';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createSimple(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new UserEntity();

    Object.keys(createUserDto).forEach((key) => {
      newUser[key] = createUserDto[key];
    });

    try {
      return await this.userRepository.save(newUser);
    } catch (err) {
      return err;
    }
  }

  async create(user: User): Promise<User> {
    const userEntity = new UserEntity();

    userEntity.pseudo = user.pseudo;
    userEntity.password = user.password;
    userEntity.email = user.email;
    userEntity.role = 'user';

    let userCreated = await this.userRepository.save(userEntity);
    delete userCreated.password;
    return userCreated;
  }

  async findAll(): Promise<CreateUserDto[]> {
    return await this.userRepository.find().then((items) =>
      items.map((e) =>
        plainToClass(CreateUserDto, classToPlain(e), {
          excludeExtraneousValues: true,
        }),
      ),
    );
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findForAuth(email: string): Promise<User> {
    return await this.userRepository
      .createQueryBuilder('user')
      .select(['user.password', 'user.email', 'user.id', 'user.role'])
      .where('user.email = :email', { email: email })
      .getOne();
  }

  async findOne(user: User): Promise<User> {
    console.log(user);
    return await this.userRepository.findOne(user);
  }

  async findMe(userId): Promise<User> {
    return await this.userRepository
      .createQueryBuilder('user')
      .select(['user.id', 'user.email', 'user.role', 'user.pseudo'])
      .where('user.id = :userId', { userId })
      .getOne();
  }
}
