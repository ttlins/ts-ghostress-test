import { Body, Controller, Get, Post, Delete } from '@nestjs/common';
import { Ghost } from './ghost.entity';
import { GhostService } from './ghost.service';
import { CreateGhostDto, DeleteGhostDto } from './ghost.dto';

@Controller('ghost')
export class GhostController {
  constructor(private readonly ghostService: GhostService) {}

  @Get()
  findAll(): Promise<Ghost[]> {
    return this.ghostService.findAll();
  }

  @Post()
  create(@Body() createGhostDto: CreateGhostDto): Promise<Ghost> {
    const ghost = new Ghost();
    ghost.name = createGhostDto.name;
    ghost.age = createGhostDto.age;

    return this.ghostService.create(ghost);
  }

  @Delete()
  delete(@Body() deleteGhostDto: DeleteGhostDto): Promise<any> {
    console.log(deleteGhostDto);
    return this.ghostService.delete(deleteGhostDto.id);
  }
}
