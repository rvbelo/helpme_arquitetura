import { Injectable, Inject, HttpException, HttpStatus, forwardRef } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Token } from './token.entity';
import { UsersService } from 'src/users/users.service';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class TokenService {
   constructor(
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,
    private usersService: UsersService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService
  ) {}

  async save(hash: string, name: string){
    let objToken = await this.tokenRepository.findOne({objToken.name})
    if (objToken){
      this.tokenRepository.update(objToken.id, {
        hash: hash
      })
    }else{
      this.tokenRepository.insert({
        hash: hash,
        name: name
      })
    }
  }

  async refreshToken(oldToken: string){
    let objToken = await this.tokenRepository.findOne({ hash: oldToken })
    if (objToken){
      let user = await this.usersService.findOne(objToken.name)      
      return this.authService.login(user)
    }else{ 
      return new HttpException({
        errorMessage: 'Token inválido'
      }, HttpStatus.UNAUTHORIZED)
    }
  }

  async getUsuarioByToken(token: string): Promise<User>{
    token = token.replace("Bearer ","").trim()
    let objToken: Token = await this.tokenRepository.findOne({hash: token})
    if (objToken){
      let user = await this.usersService.findOne(objToken.name)      
      return user
    }else{ 
      return null
    }
  }
}