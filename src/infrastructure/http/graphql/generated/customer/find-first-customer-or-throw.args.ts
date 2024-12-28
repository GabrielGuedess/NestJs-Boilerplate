import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';
import { Type } from 'class-transformer';
import { CustomerOrderByWithRelationInput } from './customer-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CustomerScalarFieldEnum } from './customer-scalar-field.enum';

@ArgsType()
export class FindFirstCustomerOrThrowArgs {

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;

    @Field(() => [CustomerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomerOrderByWithRelationInput>;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CustomerWhereUniqueInput, 'id' | 'cnpj' | 'user_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CustomerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CustomerScalarFieldEnum>;
}
