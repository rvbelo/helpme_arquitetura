import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './entities/users.repository';
import { UserRole } from './user-roles.enum';
import * as bcrypt from 'bcrypt';
import { ResultDto } from './dto/result.dto';

@Injectable()
export class UsersService {
  users: any;
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: UserRepository,
  ) {}

  async createUser(
    createUserDto: CreateUserDto,
    role: UserRole,
  ): Promise<ResultDto> {
    const { email, name, password } = createUserDto;
    const user = this.usersRepository.create();
    user.email = email;
    user.name = name;
    user.role = role;
    user.status = true;
    user.password = bcrypt.hashSync(password, 8);
    return this.usersRepository
      .save(user)
      .then((result) => {
        return <ResultDto>{
          status: true,
          message: 'Usuário cadastrado com sucesso',
        };
      })
      .catch((error) => {
        return <ResultDto>{
          status: false,
          message: 'Houve um errro ao cadastrar o usuário',
        };
      });
  }

  async findAuth(email: string): Promise<User | undefined> {
    return this.users.find({ email: email });
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const item = await this.usersRepository.preload({
      id: id,
      ...updateUserDto,
    });
    if (!item) {
      throw new NotFoundException(`Item ${id} not found`);
    }
    return this.usersRepository.save(item);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.usersRepository.remove(user);
  }
}
