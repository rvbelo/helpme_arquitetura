import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultDto } from 'src/users/dto/result.dto';
import { Repository } from 'typeorm';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';

@Injectable()
export class RequestService {

  constructor(
    // @InjectRepository(Request) private readonly repo: Repository<Request>
  ) { }

  // creates(createRequestDto: CreateRequestDto) {
  //   const obj = Object.create(createRequestDto);
  //   const request = this.repo.save(obj);
  //   return request
  // }

  findAll() {
    return `This action returns all request`;
  }

  findOne(id: number) {
    return `This action returns a #${id} request`;
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} request`;
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
