import { Request } from '../entities/request.entity';

export class ReturnRequestDto {
  request: Request;
  message: string;
}