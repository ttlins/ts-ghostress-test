import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ghost } from './ghost.entity';

@Injectable()
export class GhostService {
  constructor(
    @InjectRepository(Ghost)
    private readonly ghostRepository: Repository<Ghost>,
  ) {}

  findAll(): Promise<Ghost[]> {
    return this.ghostRepository.find();
  }

  create(ghost: Ghost): Promise<Ghost> {
    return this.ghostRepository.save(ghost);
  }

  delete(id: number): Promise<any> {
    return this.ghostRepository.delete(id);
  }

}
