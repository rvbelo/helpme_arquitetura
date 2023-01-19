import { Repository } from 'typeorm';
import { Request } from './request.entity';

import { Injectable } from '@nestjs/common';

@Injectable()
export class RequestRepository extends Repository<Request> {
  requestRepository: any;
}
