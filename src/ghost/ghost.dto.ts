export class CreateGhostDto {
  name: string;
  age: number;
  children: CreateGhostDto[];
}

export class DeleteGhostDto {
  id: number;
}
