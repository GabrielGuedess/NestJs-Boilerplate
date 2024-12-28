import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TabWhereInput } from './tab-where.input';
import { Type } from 'class-transformer';
import { TabOrderByWithAggregationInput } from './tab-order-by-with-aggregation.input';
import { TabScalarFieldEnum } from './tab-scalar-field.enum';
import { TabScalarWhereWithAggregatesInput } from './tab-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TabCountAggregateInput } from './tab-count-aggregate.input';
import { TabAvgAggregateInput } from './tab-avg-aggregate.input';
import { TabSumAggregateInput } from './tab-sum-aggregate.input';
import { TabMinAggregateInput } from './tab-min-aggregate.input';
import { TabMaxAggregateInput } from './tab-max-aggregate.input';

@ArgsType()
export class TabGroupByArgs {

    @Field(() => TabWhereInput, {nullable:true})
    @Type(() => TabWhereInput)
    where?: TabWhereInput;

    @Field(() => [TabOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TabOrderByWithAggregationInput>;

    @Field(() => [TabScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TabScalarFieldEnum>;

    @Field(() => TabScalarWhereWithAggregatesInput, {nullable:true})
    having?: TabScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TabCountAggregateInput, {nullable:true})
    _count?: TabCountAggregateInput;

    @Field(() => TabAvgAggregateInput, {nullable:true})
    _avg?: TabAvgAggregateInput;

    @Field(() => TabSumAggregateInput, {nullable:true})
    _sum?: TabSumAggregateInput;

    @Field(() => TabMinAggregateInput, {nullable:true})
    _min?: TabMinAggregateInput;

    @Field(() => TabMaxAggregateInput, {nullable:true})
    _max?: TabMaxAggregateInput;
}
