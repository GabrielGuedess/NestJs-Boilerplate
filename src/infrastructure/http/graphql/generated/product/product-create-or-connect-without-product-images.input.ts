import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutProductImagesInput } from './product-create-without-product-images.input';

@InputType()
export class ProductCreateOrConnectWithoutProductImagesInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutProductImagesInput, {nullable:false})
    @Type(() => ProductCreateWithoutProductImagesInput)
    create!: ProductCreateWithoutProductImagesInput;
}
