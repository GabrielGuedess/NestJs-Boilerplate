import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BranchCountOrderByAggregateInput } from './branch-count-order-by-aggregate.input';
import { BranchMaxOrderByAggregateInput } from './branch-max-order-by-aggregate.input';
import { BranchMinOrderByAggregateInput } from './branch-min-order-by-aggregate.input';

@InputType()
export class BranchOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cnpj?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    zip_code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address_complement?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address_neighborhood?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    state?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    branch_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customer_id?: keyof typeof SortOrder;

    @Field(() => BranchCountOrderByAggregateInput, {nullable:true})
    _count?: BranchCountOrderByAggregateInput;

    @Field(() => BranchMaxOrderByAggregateInput, {nullable:true})
    _max?: BranchMaxOrderByAggregateInput;

    @Field(() => BranchMinOrderByAggregateInput, {nullable:true})
    _min?: BranchMinOrderByAggregateInput;
}
