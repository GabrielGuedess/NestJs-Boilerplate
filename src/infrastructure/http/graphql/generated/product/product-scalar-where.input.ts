import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumProductStatusFilter } from '../prisma/enum-product-status-filter.input';
import { EnumProductSizeFilter } from '../prisma/enum-product-size-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductScalarWhereInput {

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    AND?: Array<ProductScalarWhereInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    OR?: Array<ProductScalarWhereInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    NOT?: Array<ProductScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => EnumProductStatusFilter, {nullable:true})
    status?: EnumProductStatusFilter;

    @Field(() => EnumProductSizeFilter, {nullable:true})
    size?: EnumProductSizeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    calories?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    preparation_time?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UuidFilter, {nullable:true})
    branch_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    category_id?: UuidFilter;
}
