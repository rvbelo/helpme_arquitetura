import { Inject, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './entities/users.repository'

@Injectable()
export class UsersService {
  users: any;
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: UserRepository,
  ) {}

  async findAuth(email: string): Promise<User | undefined> {
    return this.users.find({email : email});
  }
 
  async create(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.password != createUserDto.passwordConfirmation) {
      throw new UnprocessableEntityException('As senhas não conferem');
    } else {
      return this.usersRepository.save(createUserDto);
    }
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id })
    if (!user) {
    throw new NotFoundException("Usuário não encontrado")
    }
    return user
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
