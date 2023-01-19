import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateRequestDto } from './create-request.dto';

export class UpdateRequestDto extends PartialType(CreateRequestDto) {
  @IsNotEmpty({ message: 'Selecione o tipo de serviço' })
  service: string;

  @IsString()
  @IsNotEmpty({ message: 'Fale um pouco sobre o seu serviço solicitado' })
  description: string;

  status: string;

  createdAt: string;

  updatedAt: string;

  deletedAt: string;
}
