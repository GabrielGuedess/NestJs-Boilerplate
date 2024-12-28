import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProductImageScalarWhereWithAggregatesInput {

    @Field(() => [ProductImageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductImageScalarWhereWithAggregatesInput>;

    @Field(() => [ProductImageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductImageScalarWhereWithAggregatesInput>;

    @Field(() => [ProductImageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductImageScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    path?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    product_id?: UuidWithAggregatesFilter;
}
