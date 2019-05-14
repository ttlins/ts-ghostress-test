import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GhostService } from './ghost.service';
import { GhostController } from './ghost.controller';
import { Ghost } from './ghost.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ghost])],
  providers: [GhostService],
  controllers: [GhostController],
})
export class GhostModule {}
