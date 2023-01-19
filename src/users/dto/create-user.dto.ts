import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Informe o nome do usuário' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Digite o e-mail do Usuário' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Digite o telefone do Usuário' })
  phone: string;

  @IsString()
  @IsNotEmpty({ message: 'Selecione o gênero do Usuário' })
  gender: string;

  @IsString()
  @IsNotEmpty({ message: 'Selecione a data de nascimento do Usuário' })
  birthdate: string;

  @IsString()
  @IsNotEmpty({ message: 'Digite o CPF do Usuário' })
  cpf: string;

  @IsString()
  @IsNotEmpty({ message: 'Selecione o Tipo de Usuário' })
  role: string;

  @IsNotEmpty({ message: 'Informe uma senha' })
  password: string;

  @IsNotEmpty({ message: 'Confirme a senha' })
  passwordConfirmation: string;

  status: boolean;

  confirmationToken: string;

  recoverToken: string;

  createdAt: string;

  updatedAt: string;

  deletedAt: string;
}
