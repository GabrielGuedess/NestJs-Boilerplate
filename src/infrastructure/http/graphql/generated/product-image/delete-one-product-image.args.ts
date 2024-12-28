import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductImageWhereUniqueInput } from './product-image-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneProductImageArgs {

    @Field(() => ProductImageWhereUniqueInput, {nullable:false})
    @Type(() => ProductImageWhereUniqueInput)
    where!: Prisma.AtLeast<ProductImageWhereUniqueInput, 'id'>;
}
