export abstract class IntNullableFilterDTO {
  not?: this;
  lt?: number;
  gt?: number;
  lte?: number;
  gte?: number;
  equals?: number;
  in?: Array<number>;
  notIn?: Array<number>;
}
