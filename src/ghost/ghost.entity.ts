import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ghost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 36 })
  name: string;

  @Column('int')
  age: number;
}
