import { Module, forwardRef } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { DatabaseModule } from 'src/database/database.module';
import { Request } from 'src/request/entities/request.entity';

@Module({
  imports: [DatabaseModule, Request
  ],
  controllers: [RequestController],
  providers: [RequestService]
})
export class RequestModule {}
