import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TabCountOrderByAggregateInput } from './tab-count-order-by-aggregate.input';
import { TabAvgOrderByAggregateInput } from './tab-avg-order-by-aggregate.input';
import { TabMaxOrderByAggregateInput } from './tab-max-order-by-aggregate.input';
import { TabMinOrderByAggregateInput } from './tab-min-order-by-aggregate.input';
import { TabSumOrderByAggregateInput } from './tab-sum-order-by-aggregate.input';

@InputType()
export class TabOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payment_method?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    observations?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    employee_tax?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    discount?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    table_id?: keyof typeof SortOrder;

    @Field(() => TabCountOrderByAggregateInput, {nullable:true})
    _count?: TabCountOrderByAggregateInput;

    @Field(() => TabAvgOrderByAggregateInput, {nullable:true})
    _avg?: TabAvgOrderByAggregateInput;

    @Field(() => TabMaxOrderByAggregateInput, {nullable:true})
    _max?: TabMaxOrderByAggregateInput;

    @Field(() => TabMinOrderByAggregateInput, {nullable:true})
    _min?: TabMinOrderByAggregateInput;

    @Field(() => TabSumOrderByAggregateInput, {nullable:true})
    _sum?: TabSumOrderByAggregateInput;
}
