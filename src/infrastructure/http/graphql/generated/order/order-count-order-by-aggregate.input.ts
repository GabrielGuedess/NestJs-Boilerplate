import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OrderCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    observations?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payment_status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payment_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    finished_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tab_id?: keyof typeof SortOrder;
}
