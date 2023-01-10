import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ReturnUserDto } from './dto/return-user.dto'
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private authService: AuthService) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<ReturnUserDto> {
    const user = await this.usersService.create(createUserDto);
    return {
      user,
      message: 'Cadastrado com sucesso',
    };
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return {
      id,
      updateUserDto,
      message: 'Atualizado com sucesso',
    };
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return {
      id,
      message: 'Deletado com sucesso',
    };
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req){
    return this.authService.login(req.user);
  }
}
