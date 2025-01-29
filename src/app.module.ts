import { Module } from '@nestjs/common';
import { AssignmentController } from './app.controller';

@Module({
  imports: [],
  controllers: [AssignmentController],
  providers: [],
})
export class AppModule {}
