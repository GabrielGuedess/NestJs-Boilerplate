import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCategoryInput } from './product-create-without-category.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutCategoryInput } from './product-create-or-connect-without-category.input';
import { ProductCreateManyCategoryInputEnvelope } from './product-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutCategoryInput {

    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutCategoryInput)
    create?: Array<ProductCreateWithoutCategoryInput>;

    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;

    @Field(() => ProductCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCategoryInputEnvelope)
    createMany?: ProductCreateManyCategoryInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
