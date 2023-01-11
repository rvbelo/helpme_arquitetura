import {IsEmail, IsNotEmpty} from 'class-validator';

export class LoginDto {
    @IsEmail()
    @IsNotEmpty({ message: "Digite o e-mail do Usuário" })
    email: string;

    @IsNotEmpty({ message: "Informe uma senha" })
    password: string;
}
