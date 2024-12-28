import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { Int } from '@nestjs/graphql';
import { PaymentStatus } from '../prisma/payment-status.enum';
import { OrderCountAggregate } from './order-count-aggregate.output';
import { OrderAvgAggregate } from './order-avg-aggregate.output';
import { OrderSumAggregate } from './order-sum-aggregate.output';
import { OrderMinAggregate } from './order-min-aggregate.output';
import { OrderMaxAggregate } from './order-max-aggregate.output';

@ObjectType()
export class OrderGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;

    @Field(() => Int, {nullable:false})
    total_price!: number;

    @Field(() => String, {nullable:true})
    observations?: string;

    @Field(() => PaymentStatus, {nullable:false})
    payment_status!: keyof typeof PaymentStatus;

    @Field(() => Date, {nullable:true})
    payment_date?: Date | string;

    @Field(() => Date, {nullable:true})
    finished_at?: Date | string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    tab_id!: string;

    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: OrderCountAggregate;

    @Field(() => OrderAvgAggregate, {nullable:true})
    _avg?: OrderAvgAggregate;

    @Field(() => OrderSumAggregate, {nullable:true})
    _sum?: OrderSumAggregate;

    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: OrderMinAggregate;

    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: OrderMaxAggregate;
}
