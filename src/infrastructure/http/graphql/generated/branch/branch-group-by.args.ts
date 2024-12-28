import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BranchWhereInput } from './branch-where.input';
import { Type } from 'class-transformer';
import { BranchOrderByWithAggregationInput } from './branch-order-by-with-aggregation.input';
import { BranchScalarFieldEnum } from './branch-scalar-field.enum';
import { BranchScalarWhereWithAggregatesInput } from './branch-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BranchCountAggregateInput } from './branch-count-aggregate.input';
import { BranchMinAggregateInput } from './branch-min-aggregate.input';
import { BranchMaxAggregateInput } from './branch-max-aggregate.input';

@ArgsType()
export class BranchGroupByArgs {

    @Field(() => BranchWhereInput, {nullable:true})
    @Type(() => BranchWhereInput)
    where?: BranchWhereInput;

    @Field(() => [BranchOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BranchOrderByWithAggregationInput>;

    @Field(() => [BranchScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BranchScalarFieldEnum>;

    @Field(() => BranchScalarWhereWithAggregatesInput, {nullable:true})
    having?: BranchScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BranchCountAggregateInput, {nullable:true})
    _count?: BranchCountAggregateInput;

    @Field(() => BranchMinAggregateInput, {nullable:true})
    _min?: BranchMinAggregateInput;

    @Field(() => BranchMaxAggregateInput, {nullable:true})
    _max?: BranchMaxAggregateInput;
}
