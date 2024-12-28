import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TableAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    capacity?: keyof typeof SortOrder;
}
