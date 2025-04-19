export abstract class PageInfoOffset {
  readonly isLastPage: boolean;
  readonly currentPage: number;
  readonly isFirstPage: boolean;
  readonly nextPage: null | number;
  readonly previousPage: null | number;
}
