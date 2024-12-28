import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TabStatus } from '../prisma/tab-status.enum';
import { Int } from '@nestjs/graphql';
import { TabCountAggregate } from './tab-count-aggregate.output';
import { TabAvgAggregate } from './tab-avg-aggregate.output';
import { TabSumAggregate } from './tab-sum-aggregate.output';
import { TabMinAggregate } from './tab-min-aggregate.output';
import { TabMaxAggregate } from './tab-max-aggregate.output';

@ObjectType()
export class TabGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => TabStatus, {nullable:false})
    status!: keyof typeof TabStatus;

    @Field(() => Int, {nullable:false})
    value!: number;

    @Field(() => String, {nullable:false})
    payment_method!: string;

    @Field(() => String, {nullable:true})
    observations?: string;

    @Field(() => Int, {nullable:true})
    employee_tax?: number;

    @Field(() => Int, {nullable:true})
    discount?: number;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    table_id!: string;

    @Field(() => TabCountAggregate, {nullable:true})
    _count?: TabCountAggregate;

    @Field(() => TabAvgAggregate, {nullable:true})
    _avg?: TabAvgAggregate;

    @Field(() => TabSumAggregate, {nullable:true})
    _sum?: TabSumAggregate;

    @Field(() => TabMinAggregate, {nullable:true})
    _min?: TabMinAggregate;

    @Field(() => TabMaxAggregate, {nullable:true})
    _max?: TabMaxAggregate;
}
