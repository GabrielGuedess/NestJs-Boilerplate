import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductImageWhereUniqueInput } from './product-image-where-unique.input';
import { Type } from 'class-transformer';
import { ProductImageUpdateWithoutProductInput } from './product-image-update-without-product.input';

@InputType()
export class ProductImageUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => ProductImageWhereUniqueInput, {nullable:false})
    @Type(() => ProductImageWhereUniqueInput)
    where!: Prisma.AtLeast<ProductImageWhereUniqueInput, 'id'>;

    @Field(() => ProductImageUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductImageUpdateWithoutProductInput)
    data!: ProductImageUpdateWithoutProductInput;
}
