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
import { BranchWhereInput } from '../branch/branch-where.input';
import { CategoryWhereInput } from '../category/category-where.input';
import { ProductImageListRelationFilter } from '../product-image/product-image-list-relation-filter.input';

@InputType()
export class ProductWhereInput {

    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;

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

    @Field(() => BranchWhereInput, {nullable:true})
    Branch?: BranchWhereInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    Category?: CategoryWhereInput;

    @Field(() => ProductImageListRelationFilter, {nullable:true})
    ProductImages?: ProductImageListRelationFilter;
}
