import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductImageCreateWithoutProductInput } from './product-image-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductImageCreateOrConnectWithoutProductInput } from './product-image-create-or-connect-without-product.input';
import { ProductImageCreateManyProductInputEnvelope } from './product-image-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductImageWhereUniqueInput } from './product-image-where-unique.input';

@InputType()
export class ProductImageCreateNestedManyWithoutProductInput {

    @Field(() => [ProductImageCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductImageCreateWithoutProductInput)
    create?: Array<ProductImageCreateWithoutProductInput>;

    @Field(() => [ProductImageCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductImageCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductImageCreateOrConnectWithoutProductInput>;

    @Field(() => ProductImageCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductImageCreateManyProductInputEnvelope)
    createMany?: ProductImageCreateManyProductInputEnvelope;

    @Field(() => [ProductImageWhereUniqueInput], {nullable:true})
    @Type(() => ProductImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductImageWhereUniqueInput, 'id'>>;
}
