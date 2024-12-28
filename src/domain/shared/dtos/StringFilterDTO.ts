export abstract class StringFilterDTO {
  not?: this;
  lt?: string;
  gt?: string;
  lte?: string;
  gte?: string;
  equals?: string;
  contains?: string;
  endsWith?: string;
  in?: Array<string>;
  startsWith?: string;
  notIn?: Array<string>;
  mode?: 'default' | 'insensitive';
}
