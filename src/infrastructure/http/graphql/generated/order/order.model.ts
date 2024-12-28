import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { Int } from '@nestjs/graphql';
import { PaymentStatus } from '../prisma/payment-status.enum';
import { Tab } from '../tab/tab.model';

@ObjectType()
export class Order {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => OrderStatus, {nullable:false,defaultValue:'PENDING'})
    status!: keyof typeof OrderStatus;

    @Field(() => Int, {nullable:false})
    total_price!: number;

    @Field(() => String, {nullable:true})
    observations!: string | null;

    @Field(() => PaymentStatus, {nullable:false,defaultValue:'PENDING'})
    payment_status!: keyof typeof PaymentStatus;

    @Field(() => Date, {nullable:true})
    payment_date!: Date | null;

    @Field(() => Date, {nullable:true})
    finished_at!: Date | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    tab_id!: string;

    @Field(() => Tab, {nullable:false})
    Tab?: Tab;
}
