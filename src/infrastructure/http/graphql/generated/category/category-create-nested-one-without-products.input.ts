import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutProductsInput } from './category-create-without-products.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutProductsInput } from './category-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutProductsInput {

    @Field(() => CategoryCreateWithoutProductsInput, {nullable:true})
    @Type(() => CategoryCreateWithoutProductsInput)
    create?: CategoryCreateWithoutProductsInput;

    @Field(() => CategoryCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}
