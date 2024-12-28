import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductImageWhereUniqueInput } from './product-image-where-unique.input';
import { Type } from 'class-transformer';
import { ProductImageUpdateWithoutProductInput } from './product-image-update-without-product.input';
import { ProductImageCreateWithoutProductInput } from './product-image-create-without-product.input';

@InputType()
export class ProductImageUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => ProductImageWhereUniqueInput, {nullable:false})
    @Type(() => ProductImageWhereUniqueInput)
    where!: Prisma.AtLeast<ProductImageWhereUniqueInput, 'id'>;

    @Field(() => ProductImageUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductImageUpdateWithoutProductInput)
    update!: ProductImageUpdateWithoutProductInput;

    @Field(() => ProductImageCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductImageCreateWithoutProductInput)
    create!: ProductImageCreateWithoutProductInput;
}
