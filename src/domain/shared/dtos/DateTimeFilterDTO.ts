export abstract class DateTimeFilterDTO {
  not?: this;
  lt?: Date | string;
  gt?: Date | string;
  lte?: Date | string;
  gte?: Date | string;
  equals?: Date | string;
  in?: Array<Date> | Array<string>;
  notIn?: Array<Date> | Array<string>;
}
