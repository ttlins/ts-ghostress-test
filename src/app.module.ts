import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GhostModule } from './ghost/ghost.module';

@Module({
  imports: [TypeOrmModule.forRoot(), GhostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
