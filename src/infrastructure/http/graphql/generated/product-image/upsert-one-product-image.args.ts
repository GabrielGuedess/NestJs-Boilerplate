import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductImageWhereUniqueInput } from './product-image-where-unique.input';
import { Type } from 'class-transformer';
import { ProductImageCreateInput } from './product-image-create.input';
import { ProductImageUpdateInput } from './product-image-update.input';

@ArgsType()
export class UpsertOneProductImageArgs {

    @Field(() => ProductImageWhereUniqueInput, {nullable:false})
    @Type(() => ProductImageWhereUniqueInput)
    where!: Prisma.AtLeast<ProductImageWhereUniqueInput, 'id'>;

    @Field(() => ProductImageCreateInput, {nullable:false})
    @Type(() => ProductImageCreateInput)
    create!: ProductImageCreateInput;

    @Field(() => ProductImageUpdateInput, {nullable:false})
    @Type(() => ProductImageUpdateInput)
    update!: ProductImageUpdateInput;
}
