import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BranchOrderByWithRelationInput } from '../branch/branch-order-by-with-relation.input';
import { TabOrderByRelationAggregateInput } from '../tab/tab-order-by-relation-aggregate.input';
import { EmployeeOrderByRelationAggregateInput } from '../employee/employee-order-by-relation-aggregate.input';

@InputType()
export class TableOrderByWithRelationInput {

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

    @Field(() => BranchOrderByWithRelationInput, {nullable:true})
    Branch?: BranchOrderByWithRelationInput;

    @Field(() => TabOrderByRelationAggregateInput, {nullable:true})
    Tabs?: TabOrderByRelationAggregateInput;

    @Field(() => EmployeeOrderByRelationAggregateInput, {nullable:true})
    Employees?: EmployeeOrderByRelationAggregateInput;
}
