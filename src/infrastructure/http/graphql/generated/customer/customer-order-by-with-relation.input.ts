import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { BranchOrderByRelationAggregateInput } from '../branch/branch-order-by-relation-aggregate.input';

@InputType()
export class CustomerOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    User?: UserOrderByWithRelationInput;

    @Field(() => BranchOrderByRelationAggregateInput, {nullable:true})
    Branches?: BranchOrderByRelationAggregateInput;
}
