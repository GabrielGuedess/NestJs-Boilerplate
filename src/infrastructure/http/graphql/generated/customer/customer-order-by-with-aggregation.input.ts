import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CustomerCountOrderByAggregateInput } from './customer-count-order-by-aggregate.input';
import { CustomerMaxOrderByAggregateInput } from './customer-max-order-by-aggregate.input';
import { CustomerMinOrderByAggregateInput } from './customer-min-order-by-aggregate.input';

@InputType()
export class CustomerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cnpj?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    company_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fantasy_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => CustomerCountOrderByAggregateInput, {nullable:true})
    _count?: CustomerCountOrderByAggregateInput;

    @Field(() => CustomerMaxOrderByAggregateInput, {nullable:true})
    _max?: CustomerMaxOrderByAggregateInput;

    @Field(() => CustomerMinOrderByAggregateInput, {nullable:true})
    _min?: CustomerMinOrderByAggregateInput;
}
