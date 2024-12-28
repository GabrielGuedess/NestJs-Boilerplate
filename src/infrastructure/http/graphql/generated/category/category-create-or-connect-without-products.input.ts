import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutProductsInput } from './category-create-without-products.input';

@InputType()
export class CategoryCreateOrConnectWithoutProductsInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutProductsInput)
    create!: CategoryCreateWithoutProductsInput;
}
