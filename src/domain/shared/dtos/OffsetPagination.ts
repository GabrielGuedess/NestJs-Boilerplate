import { type PageInfoOffset } from 'domain/shared/dtos/PageInfoOffset';

export abstract class OffsetPagination<T> {
  nodes: T[];
  count: number;
  totalCount: number;
  pageInfo: PageInfoOffset;
}
