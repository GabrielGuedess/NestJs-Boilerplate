export abstract class NestedEnumRoleFilter<T> {
  equals?: T;
  in?: Array<T>;
  notIn?: Array<T>;
  not?: NestedEnumRoleFilter<T>;
}

export abstract class EnumDTO<T> {
  equals?: T;
  in?: Array<T>;
  notIn?: Array<T>;
  not?: NestedEnumRoleFilter<T>;
}
