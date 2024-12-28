import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumProductStatusWithAggregatesFilter } from '../prisma/enum-product-status-with-aggregates-filter.input';
import { EnumProductSizeWithAggregatesFilter } from '../prisma/enum-product-size-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProductScalarWhereWithAggregatesInput {

    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductScalarWhereWithAggregatesInput>;

    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductScalarWhereWithAggregatesInput>;

    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    price?: IntWithAggregatesFilter;

    @Field(() => EnumProductStatusWithAggregatesFilter, {nullable:true})
    status?: EnumProductStatusWithAggregatesFilter;

    @Field(() => EnumProductSizeWithAggregatesFilter, {nullable:true})
    size?: EnumProductSizeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    calories?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    preparation_time?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    branch_id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    category_id?: UuidWithAggregatesFilter;
}
