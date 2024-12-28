import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EmployeeCountOrderByAggregateInput } from './employee-count-order-by-aggregate.input';
import { EmployeeMaxOrderByAggregateInput } from './employee-max-order-by-aggregate.input';
import { EmployeeMinOrderByAggregateInput } from './employee-min-order-by-aggregate.input';

@InputType()
export class EmployeeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    branch_id?: keyof typeof SortOrder;

    @Field(() => EmployeeCountOrderByAggregateInput, {nullable:true})
    _count?: EmployeeCountOrderByAggregateInput;

    @Field(() => EmployeeMaxOrderByAggregateInput, {nullable:true})
    _max?: EmployeeMaxOrderByAggregateInput;

    @Field(() => EmployeeMinOrderByAggregateInput, {nullable:true})
    _min?: EmployeeMinOrderByAggregateInput;
}
