import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TabOrderByWithRelationInput } from '../tab/tab-order-by-with-relation.input';

@InputType()
export class OrderOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total_price?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    observations?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    payment_status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    payment_date?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    finished_at?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tab_id?: keyof typeof SortOrder;

    @Field(() => TabOrderByWithRelationInput, {nullable:true})
    Tab?: TabOrderByWithRelationInput;
}
