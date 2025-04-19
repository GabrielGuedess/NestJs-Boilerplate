import { Field, Directive, ObjectType } from '@nestjs/graphql';

import { type PageInfoCursor as PageInfoCursorDomain } from 'domain/shared/dtos/PageInfoCursor';

@ObjectType()
@Directive('@shareable')
export class PageInfoCursor implements PageInfoCursorDomain {
  @Field(() => String)
  @Directive('@shareable')
  endCursor: string;

  @Field(() => String)
  @Directive('@shareable')
  startCursor: string;

  @Field(() => Boolean)
  @Directive('@shareable')
  hasNextPage: boolean;

  @Field(() => Boolean)
  @Directive('@shareable')
  hasPreviousPage: boolean;
}
