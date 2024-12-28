import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { Int } from '@nestjs/graphql';
import { PaymentStatus } from '../prisma/payment-status.enum';

@ObjectType()
export class OrderMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;

    @Field(() => Int, {nullable:true})
    total_price?: number;

    @Field(() => String, {nullable:true})
    observations?: string;

    @Field(() => PaymentStatus, {nullable:true})
    payment_status?: keyof typeof PaymentStatus;

    @Field(() => Date, {nullable:true})
    payment_date?: Date | string;

    @Field(() => Date, {nullable:true})
    finished_at?: Date | string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    tab_id?: string;
}
