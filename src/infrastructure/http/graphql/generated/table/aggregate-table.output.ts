import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TableCountAggregate } from './table-count-aggregate.output';
import { TableAvgAggregate } from './table-avg-aggregate.output';
import { TableSumAggregate } from './table-sum-aggregate.output';
import { TableMinAggregate } from './table-min-aggregate.output';
import { TableMaxAggregate } from './table-max-aggregate.output';

@ObjectType()
export class AggregateTable {

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
