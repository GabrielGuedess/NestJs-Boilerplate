import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';
import { OrderOrderByWithRelationInput } from './order-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderScalarFieldEnum } from './order-scalar-field.enum';

@ArgsType()
export class FindFirstOrderArgs {

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;

    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OrderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}
