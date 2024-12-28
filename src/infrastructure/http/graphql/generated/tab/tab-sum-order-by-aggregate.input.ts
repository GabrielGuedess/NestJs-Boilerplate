import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TabSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employee_tax?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discount?: keyof typeof SortOrder;
}
