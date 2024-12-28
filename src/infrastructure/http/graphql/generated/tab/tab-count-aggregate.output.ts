import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TabCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    value!: number;

    @Field(() => Int, {nullable:false})
    payment_method!: number;

    @Field(() => Int, {nullable:false})
    observations!: number;

    @Field(() => Int, {nullable:false})
    employee_tax!: number;

    @Field(() => Int, {nullable:false})
    discount!: number;

    @Field(() => Int, {nullable:false})
    active!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    table_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
