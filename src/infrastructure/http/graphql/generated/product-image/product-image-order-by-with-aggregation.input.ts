import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductImageCountOrderByAggregateInput } from './product-image-count-order-by-aggregate.input';
import { ProductImageMaxOrderByAggregateInput } from './product-image-max-order-by-aggregate.input';
import { ProductImageMinOrderByAggregateInput } from './product-image-min-order-by-aggregate.input';

@InputType()
export class ProductImageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    path?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    product_id?: keyof typeof SortOrder;

    @Field(() => ProductImageCountOrderByAggregateInput, {nullable:true})
    _count?: ProductImageCountOrderByAggregateInput;

    @Field(() => ProductImageMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductImageMaxOrderByAggregateInput;

    @Field(() => ProductImageMinOrderByAggregateInput, {nullable:true})
    _min?: ProductImageMinOrderByAggregateInput;
}
