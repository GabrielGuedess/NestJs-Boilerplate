import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TableStatus } from '../prisma/table-status.enum';
import { TableCountAggregate } from './table-count-aggregate.output';
import { TableAvgAggregate } from './table-avg-aggregate.output';
import { TableSumAggregate } from './table-sum-aggregate.output';
import { TableMinAggregate } from './table-min-aggregate.output';
import { TableMaxAggregate } from './table-max-aggregate.output';

@ObjectType()
export class TableGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    capacity!: number;

    @Field(() => TableStatus, {nullable:false})
    status!: keyof typeof TableStatus;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => Date, {nullable:true})
    occupied_since?: Date | string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    branch_id!: string;

    @Field(() => TableCountAggregate, {nullable:true})
    _count?: TableCountAggregate;

    @Field(() => TableAvgAggregate, {nullable:true})
    _avg?: TableAvgAggregate;

    @Field(() => TableSumAggregate, {nullable:true})
    _sum?: TableSumAggregate;

    @Field(() => TableMinAggregate, {nullable:true})
    _min?: TableMinAggregate;

    @Field(() => TableMaxAggregate, {nullable:true})
    _max?: TableMaxAggregate;
}
