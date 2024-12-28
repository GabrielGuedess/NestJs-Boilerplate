import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutProductsInput } from './category-create-without-products.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutProductsInput } from './category-create-or-connect-without-products.input';
import { CategoryUpsertWithoutProductsInput } from './category-upsert-without-products.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateToOneWithWhereWithoutProductsInput } from './category-update-to-one-with-where-without-products.input';

@InputType()
export class CategoryUpdateOneRequiredWithoutProductsNestedInput {

    @Field(() => CategoryCreateWithoutProductsInput, {nullable:true})
    @Type(() => CategoryCreateWithoutProductsInput)
    create?: CategoryCreateWithoutProductsInput;

    @Field(() => CategoryCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput;

    @Field(() => CategoryUpsertWithoutProductsInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutProductsInput)
    upsert?: CategoryUpsertWithoutProductsInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => CategoryUpdateToOneWithWhereWithoutProductsInput)
    update?: CategoryUpdateToOneWithWhereWithoutProductsInput;
}
