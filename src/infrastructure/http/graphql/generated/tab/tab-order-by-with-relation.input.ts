import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TableOrderByWithRelationInput } from '../table/table-order-by-with-relation.input';
import { OrderOrderByRelationAggregateInput } from '../order/order-order-by-relation-aggregate.input';

@InputType()
export class TabOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payment_method?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    observations?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    employee_tax?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    discount?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    table_id?: keyof typeof SortOrder;

    @Field(() => TableOrderByWithRelationInput, {nullable:true})
    Table?: TableOrderByWithRelationInput;

    @Field(() => OrderOrderByRelationAggregateInput, {nullable:true})
    Orders?: OrderOrderByRelationAggregateInput;
}
