import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductImageCreateWithoutProductInput } from './product-image-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductImageCreateOrConnectWithoutProductInput } from './product-image-create-or-connect-without-product.input';
import { ProductImageUpsertWithWhereUniqueWithoutProductInput } from './product-image-upsert-with-where-unique-without-product.input';
import { ProductImageCreateManyProductInputEnvelope } from './product-image-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductImageWhereUniqueInput } from './product-image-where-unique.input';
import { ProductImageUpdateWithWhereUniqueWithoutProductInput } from './product-image-update-with-where-unique-without-product.input';
import { ProductImageUpdateManyWithWhereWithoutProductInput } from './product-image-update-many-with-where-without-product.input';
import { ProductImageScalarWhereInput } from './product-image-scalar-where.input';

@InputType()
export class ProductImageUpdateManyWithoutProductNestedInput {

    @Field(() => [ProductImageCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductImageCreateWithoutProductInput)
    create?: Array<ProductImageCreateWithoutProductInput>;

    @Field(() => [ProductImageCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductImageCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductImageCreateOrConnectWithoutProductInput>;

    @Field(() => [ProductImageUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductImageUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ProductImageUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ProductImageCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductImageCreateManyProductInputEnvelope)
    createMany?: ProductImageCreateManyProductInputEnvelope;

    @Field(() => [ProductImageWhereUniqueInput], {nullable:true})
    @Type(() => ProductImageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductImageWhereUniqueInput, 'id'>>;

    @Field(() => [ProductImageWhereUniqueInput], {nullable:true})
    @Type(() => ProductImageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductImageWhereUniqueInput, 'id'>>;

    @Field(() => [ProductImageWhereUniqueInput], {nullable:true})
    @Type(() => ProductImageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductImageWhereUniqueInput, 'id'>>;

    @Field(() => [ProductImageWhereUniqueInput], {nullable:true})
    @Type(() => ProductImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductImageWhereUniqueInput, 'id'>>;

    @Field(() => [ProductImageUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductImageUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ProductImageUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ProductImageUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ProductImageUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ProductImageUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ProductImageScalarWhereInput], {nullable:true})
    @Type(() => ProductImageScalarWhereInput)
    deleteMany?: Array<ProductImageScalarWhereInput>;
}
