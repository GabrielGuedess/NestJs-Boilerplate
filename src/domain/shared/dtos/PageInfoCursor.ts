export abstract class PageInfoCursor {
  readonly hasNextPage: boolean;
  readonly endCursor: null | string;
  readonly hasPreviousPage: boolean;
  readonly startCursor: null | string;
}
