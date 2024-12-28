import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    total_price!: number;

    @Field(() => Int, {nullable:false})
    observations!: number;

    @Field(() => Int, {nullable:false})
    payment_status!: number;

    @Field(() => Int, {nullable:false})
    payment_date!: number;

    @Field(() => Int, {nullable:false})
    finished_at!: number;

    @Field(() => Int, {nullable:false})
    active!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    tab_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
