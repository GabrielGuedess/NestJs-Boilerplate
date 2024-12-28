import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutCategoryInput } from './product-update-without-category.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCategoryInput)
    data!: ProductUpdateWithoutCategoryInput;
}
