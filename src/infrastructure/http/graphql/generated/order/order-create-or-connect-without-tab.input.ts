import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutTabInput } from './order-create-without-tab.input';

@InputType()
export class OrderCreateOrConnectWithoutTabInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;

    @Field(() => OrderCreateWithoutTabInput, {nullable:false})
    @Type(() => OrderCreateWithoutTabInput)
    create!: OrderCreateWithoutTabInput;
}
