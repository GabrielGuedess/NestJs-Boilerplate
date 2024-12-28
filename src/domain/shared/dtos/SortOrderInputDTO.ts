export abstract class SortOrderInputDTO {
  sort!: 'asc' | 'desc';
  nulls?: 'last' | 'first';
}
