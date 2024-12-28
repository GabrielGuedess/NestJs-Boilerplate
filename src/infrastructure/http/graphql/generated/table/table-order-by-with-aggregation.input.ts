import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TableCountOrderByAggregateInput } from './table-count-order-by-aggregate.input';
import { TableAvgOrderByAggregateInput } from './table-avg-order-by-aggregate.input';
import { TableMaxOrderByAggregateInput } from './table-max-order-by-aggregate.input';
import { TableMinOrderByAggregateInput } from './table-min-order-by-aggregate.input';
import { TableSumOrderByAggregateInput } from './table-sum-order-by-aggregate.input';

@InputType()
export class TableOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    capacity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    occupied_since?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    branch_id?: keyof typeof SortOrder;

    @Field(() => TableCountOrderByAggregateInput, {nullable:true})
    _count?: TableCountOrderByAggregateInput;

    @Field(() => TableAvgOrderByAggregateInput, {nullable:true})
    _avg?: TableAvgOrderByAggregateInput;

    @Field(() => TableMaxOrderByAggregateInput, {nullable:true})
    _max?: TableMaxOrderByAggregateInput;

    @Field(() => TableMinOrderByAggregateInput, {nullable:true})
    _min?: TableMinOrderByAggregateInput;

    @Field(() => TableSumOrderByAggregateInput, {nullable:true})
    _sum?: TableSumOrderByAggregateInput;
}
