import { type Edge } from 'domain/shared/dtos/Edge';
import { type PageInfoCursor } from 'domain/shared/dtos/PageInfoCursor';

export abstract class RelayPagination<T> {
  nodes: T[];
  count: number;
  edges: Edge<T>[];
  totalCount: number;
  pageInfo: PageInfoCursor;
}
