import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutTabInput } from './order-update-without-tab.input';

@InputType()
export class OrderUpdateWithWhereUniqueWithoutTabInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;

    @Field(() => OrderUpdateWithoutTabInput, {nullable:false})
    @Type(() => OrderUpdateWithoutTabInput)
    data!: OrderUpdateWithoutTabInput;
}
