import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { ResultDto } from 'src/users/dto/result.dto';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

//  @Post()
//   async create(
//     @Body() createRequestDto: CreateRequestDto,
//   ): Promise<ResultDto> {
//     const requests = this.requestService.creates(createRequestDto);
//     return {
//       status: true,
//       message: 'Solicitação Efetuada com sucesso',
//     };
//   }

  @Get()
  findAll() {
    return this.requestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto) {
    return this.requestService.update(+id, updateRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestService.remove(+id);
  }
}
