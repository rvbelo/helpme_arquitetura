import { forwardRef, Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { requestProviders } from './request.providers';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [RequestController],
  providers: [RequestService, ...requestProviders],
  exports: [RequestService],
})
export class RequestModule {}
