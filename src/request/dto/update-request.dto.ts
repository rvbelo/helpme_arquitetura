import { PartialType } from '@nestjs/swagger';
import { CreateRequestDto } from './create-request.dto';
import {  IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class UpdateRequestDto extends PartialType(CreateRequestDto) {
    @IsString()
    @IsNotEmpty({ message: "Selecione o Tipo de Serviço" })
    service: string;

    @IsEmail()
    @IsNotEmpty({ message: "Fale um pouco sobre o serviço" })
    description: string;

    userId: number;

    architectId: number;

    status: boolean;

    createdAt: string;

    updatedAt: string;

    deletedAt: string;

}
