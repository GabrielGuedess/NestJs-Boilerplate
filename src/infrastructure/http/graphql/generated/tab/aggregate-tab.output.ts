import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TabCountAggregate } from './tab-count-aggregate.output';
import { TabAvgAggregate } from './tab-avg-aggregate.output';
import { TabSumAggregate } from './tab-sum-aggregate.output';
import { TabMinAggregate } from './tab-min-aggregate.output';
import { TabMaxAggregate } from './tab-max-aggregate.output';

@ObjectType()
export class AggregateTab {

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
