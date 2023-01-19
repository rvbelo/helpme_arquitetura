
![Logo](https://i.postimg.cc/5NCW5KBL/Logo-Invert.png)


# Projeto - HelpMe Arquiteto

Sistema de gerênciamento de solicitações de projetos arquitetonicos.

É composto de 3 tabelas (User, Request e Suport)




## Stack utilizada

**Front-end:** React, Styled Componets

**Back-end:** NestJS, TypeOrm , MySql


## Funcionalidades

- Cadastro de Usuário (Cliente e Arquiteto);
- Lista todos os Arquiteto disponivel;
- *Solicita Projeto;
- *Visualiza Projetos Solicitado, podendo excluir e editar;
- **Visualizar Projetos Solicitado, podendo aceitar ou rejeitar proposta.
- Abre chamado para Suporte.

*Cliente
**Arquiteto


## Screenshots

![App Screenshot](https://i.postimg.cc/63XfS3gB/img2.jpg)
![App Screenshot](https://i.postimg.cc/vmWWWyBk/img3.jpg)
![App Screenshot](https://i.postimg.cc/pX5T4ZHJ/img4.jpg)

#### Solicitação de Login

```http
  POST /api/users/login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `number` | |
| `password`      | `string` | |

#### Cria um Usuário 

```http
  POST /api/users
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | |
| `email`      | `string` | |
| `phone`      | `string` | |
| `birthdate`      | `string` | |
| `CPF`      | `string` | |


#### Retorna todos os itens

```http
  GET /api/users
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `number` | **Obrigatório**. A chave da sua API |

#### Retorna um Usuário 

```http
  GET /api/users/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do Usuário  que você quer |

#### Exclui um Usuário 

```http
  DELETE /api/users/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do Usuário  que você quer |

#### Atualiza um Usuário 

```http
  PATCH /api/users/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | |
| `email`      | `string` | |
| `phone`      | `string` | |
| `birthdate`      | `string` | |
| `CPF`      | `string` | |


#### Cria uma Solicitação 

```http
  POST /api/request
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `userId`      | `number` | |
| `service`      | `string` | |
| `description`      | `string` | |


## Documentação

[Documentação NestJS](https://nestjs.com/)

[Documentação TypeOrm](https://typeorm.io/) 

[Documentação ReactJS](https://reactjs.org/)


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```