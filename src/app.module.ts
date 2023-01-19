import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RequestModule } from './request/request.module';

@Module({
  imports: [AuthModule, RequestModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
