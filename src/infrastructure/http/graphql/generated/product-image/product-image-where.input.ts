import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductWhereInput } from '../product/product-where.input';

@InputType()
export class ProductImageWhereInput {

    @Field(() => [ProductImageWhereInput], {nullable:true})
    AND?: Array<ProductImageWhereInput>;

    @Field(() => [ProductImageWhereInput], {nullable:true})
    OR?: Array<ProductImageWhereInput>;

    @Field(() => [ProductImageWhereInput], {nullable:true})
    NOT?: Array<ProductImageWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    path?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UuidFilter, {nullable:true})
    product_id?: UuidFilter;

    @Field(() => ProductWhereInput, {nullable:true})
    Product?: ProductWhereInput;
}
