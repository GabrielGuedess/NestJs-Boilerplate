import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TabWhereInput } from './tab-where.input';
import { Type } from 'class-transformer';
import { TabOrderByWithRelationInput } from './tab-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TabWhereUniqueInput } from './tab-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TabCountAggregateInput } from './tab-count-aggregate.input';
import { TabAvgAggregateInput } from './tab-avg-aggregate.input';
import { TabSumAggregateInput } from './tab-sum-aggregate.input';
import { TabMinAggregateInput } from './tab-min-aggregate.input';
import { TabMaxAggregateInput } from './tab-max-aggregate.input';

@ArgsType()
export class TabAggregateArgs {

    @Field(() => TabWhereInput, {nullable:true})
    @Type(() => TabWhereInput)
    where?: TabWhereInput;

    @Field(() => [TabOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TabOrderByWithRelationInput>;

    @Field(() => TabWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TabWhereUniqueInput, 'id'>;

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
