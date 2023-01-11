import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { TokenService } from 'src/token/token.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
      private usersService: UsersService,
      private jwtService: JwtService,
      private tokenService: TokenService
    ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findAuth(email);
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id};
    const token = this.jwtService.sign(payload)
    this.tokenService.save(token, user.email)
    return {
      access_token: token,
    };
  }

  async loginToken(token: string) {
    let usuario: User = await this.tokenService.getUsuarioByToken(token)
    if (usuario){
      return this.login(usuario)
    }else{
      return new HttpException({
        errorMessage: 'Token inválido'
      }, HttpStatus.UNAUTHORIZED)
    }
  }
}
