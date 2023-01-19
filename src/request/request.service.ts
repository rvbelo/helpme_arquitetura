import { Inject, Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Request } from './entities/request.entity';
import { RequestRepository } from './entities/request.repository';

@Injectable()
export class RequestService {
  constructor(
    @Inject('REQUEST_REPOSITORY')
    private requestRepository: RequestRepository,
  ) {}

  create(createRequestDto: CreateRequestDto): Promise<Request> {
    const request = this.requestRepository.create(createRequestDto);
    return this.requestRepository.save(request);
  }

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
