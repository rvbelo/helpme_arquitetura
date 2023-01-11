import { IsNotEmpty, IsString} from 'class-validator';

export class CreateRequestDto {
    @IsString()
    @IsNotEmpty({ message: "Selecione o Tipo de Serviço" })
    service: string;

    @IsNotEmpty({ message: "Fale um pouco sobre o serviço" })
    description: string;

    userId: number;

    architectId: number;

    status: boolean;

    createdAt: string;

    updatedAt: string;

    deletedAt: string;
}
