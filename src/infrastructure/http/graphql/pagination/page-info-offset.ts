import { Field, Directive, ObjectType } from '@nestjs/graphql';

import { PageInfoOffset as PageInfoOffsetDomain } from 'domain/shared/dtos/PageInfoOffset';

@ObjectType()
@Directive('@shareable')
export class PageInfoOffset implements PageInfoOffsetDomain {
  @Field(() => Number)
  @Directive('@shareable')
  currentPage: number;

  @Field(() => Boolean)
  @Directive('@shareable')
  isLastPage: boolean;

  @Field(() => Boolean)
  @Directive('@shareable')
  isFirstPage: boolean;

  @Field(() => Number, { nullable: true })
  @Directive('@shareable')
  nextPage: null | number;

  @Field(() => Number, { nullable: true })
  @Directive('@shareable')
  previousPage: null | number;
}
