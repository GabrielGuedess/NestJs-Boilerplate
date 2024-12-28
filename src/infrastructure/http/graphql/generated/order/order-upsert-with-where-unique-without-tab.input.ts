import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutTabInput } from './order-update-without-tab.input';
import { OrderCreateWithoutTabInput } from './order-create-without-tab.input';

@InputType()
export class OrderUpsertWithWhereUniqueWithoutTabInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;

    @Field(() => OrderUpdateWithoutTabInput, {nullable:false})
    @Type(() => OrderUpdateWithoutTabInput)
    update!: OrderUpdateWithoutTabInput;

    @Field(() => OrderCreateWithoutTabInput, {nullable:false})
    @Type(() => OrderCreateWithoutTabInput)
    create!: OrderCreateWithoutTabInput;
}
