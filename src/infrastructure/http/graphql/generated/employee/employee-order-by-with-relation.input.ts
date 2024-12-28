import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { BranchOrderByWithRelationInput } from '../branch/branch-order-by-with-relation.input';
import { TableOrderByRelationAggregateInput } from '../table/table-order-by-relation-aggregate.input';

@InputType()
export class EmployeeOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    User?: UserOrderByWithRelationInput;

    @Field(() => BranchOrderByWithRelationInput, {nullable:true})
    Branch?: BranchOrderByWithRelationInput;

    @Field(() => TableOrderByRelationAggregateInput, {nullable:true})
    Tables?: TableOrderByRelationAggregateInput;
}
