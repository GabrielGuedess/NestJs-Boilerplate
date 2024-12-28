import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BranchCountAggregate } from './branch-count-aggregate.output';
import { BranchMinAggregate } from './branch-min-aggregate.output';
import { BranchMaxAggregate } from './branch-max-aggregate.output';

@ObjectType()
export class AggregateBranch {

    @Field(() => BranchCountAggregate, {nullable:true})
    _count?: BranchCountAggregate;

    @Field(() => BranchMinAggregate, {nullable:true})
    _min?: BranchMinAggregate;

    @Field(() => BranchMaxAggregate, {nullable:true})
    _max?: BranchMaxAggregate;
}
