import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductCountOrderByAggregateInput } from './product-count-order-by-aggregate.input';
import { ProductAvgOrderByAggregateInput } from './product-avg-order-by-aggregate.input';
import { ProductMaxOrderByAggregateInput } from './product-max-order-by-aggregate.input';
import { ProductMinOrderByAggregateInput } from './product-min-order-by-aggregate.input';
import { ProductSumOrderByAggregateInput } from './product-sum-order-by-aggregate.input';

@InputType()
export class ProductOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    size?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    calories?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    preparation_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    branch_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => ProductCountOrderByAggregateInput, {nullable:true})
    _count?: ProductCountOrderByAggregateInput;

    @Field(() => ProductAvgOrderByAggregateInput, {nullable:true})
    _avg?: ProductAvgOrderByAggregateInput;

    @Field(() => ProductMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductMaxOrderByAggregateInput;

    @Field(() => ProductMinOrderByAggregateInput, {nullable:true})
    _min?: ProductMinOrderByAggregateInput;

    @Field(() => ProductSumOrderByAggregateInput, {nullable:true})
    _sum?: ProductSumOrderByAggregateInput;
}
