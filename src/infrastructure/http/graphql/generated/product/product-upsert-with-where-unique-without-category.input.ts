import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutCategoryInput } from './product-update-without-category.input';
import { ProductCreateWithoutCategoryInput } from './product-create-without-category.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCategoryInput)
    update!: ProductUpdateWithoutCategoryInput;

    @Field(() => ProductCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductCreateWithoutCategoryInput)
    create!: ProductCreateWithoutCategoryInput;
}
