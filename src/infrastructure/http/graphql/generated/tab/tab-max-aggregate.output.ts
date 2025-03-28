import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TabStatus } from '../prisma/tab-status.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TabMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TabStatus, {nullable:true})
    status?: keyof typeof TabStatus;

    @Field(() => Int, {nullable:true})
    value?: number;

    @Field(() => String, {nullable:true})
    payment_method?: string;

    @Field(() => String, {nullable:true})
    observations?: string;

    @Field(() => Int, {nullable:true})
    employee_tax?: number;

    @Field(() => Int, {nullable:true})
    discount?: number;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    table_id?: string;
}
