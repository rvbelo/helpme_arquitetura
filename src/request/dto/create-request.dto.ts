import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateRequestDto {
  @IsNotEmpty({ message: 'Selecione o tipo de serviço' })
  service: string;

  @IsString()
  @IsNotEmpty({ message: 'Fale um pouco sobre o seu serviço solicitado' })
  description: string;

  @IsNumber()
  user: User;

  status: string;

  createdAt: string;

  updatedAt: string;

  deletedAt: string;
}
