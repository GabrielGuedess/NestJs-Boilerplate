import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductImageUpdateInput } from './product-image-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductImageWhereUniqueInput } from './product-image-where-unique.input';

@ArgsType()
export class UpdateOneProductImageArgs {

    @Field(() => ProductImageUpdateInput, {nullable:false})
    @Type(() => ProductImageUpdateInput)
    data!: ProductImageUpdateInput;

    @Field(() => ProductImageWhereUniqueInput, {nullable:false})
    @Type(() => ProductImageWhereUniqueInput)
    where!: Prisma.AtLeast<ProductImageWhereUniqueInput, 'id'>;
}
