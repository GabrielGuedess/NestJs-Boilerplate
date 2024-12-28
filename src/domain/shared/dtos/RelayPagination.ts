import { type Edge } from 'domain/shared/dtos/Edge';
import { type PageInfo } from 'domain/shared/dtos/PageInfo';

export abstract class RelayPagination<T> {
  nodes: T[];
  count: number;
  edges: Edge<T>[];
  pageInfo: PageInfo;
  totalCount: number;
}
