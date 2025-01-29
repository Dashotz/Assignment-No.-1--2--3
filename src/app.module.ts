import { Module } from '@nestjs/common';
import { AssignmentController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AssignmentController],
  providers: [AppService],
})
export class AppModule {}
