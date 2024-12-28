import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductImageWhereInput } from './product-image-where.input';
import { Type } from 'class-transformer';
import { ProductImageOrderByWithRelationInput } from './product-image-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductImageWhereUniqueInput } from './product-image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductImageScalarFieldEnum } from './product-image-scalar-field.enum';

@ArgsType()
export class FindFirstProductImageArgs {

    @Field(() => ProductImageWhereInput, {nullable:true})
    @Type(() => ProductImageWhereInput)
    where?: ProductImageWhereInput;

    @Field(() => [ProductImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductImageOrderByWithRelationInput>;

    @Field(() => ProductImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductImageWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductImageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductImageScalarFieldEnum>;
}
