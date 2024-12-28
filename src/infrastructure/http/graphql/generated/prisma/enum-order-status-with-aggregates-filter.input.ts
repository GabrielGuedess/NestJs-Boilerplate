import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from './order-status.enum';
import { NestedEnumOrderStatusWithAggregatesFilter } from './nested-enum-order-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumOrderStatusFilter } from './nested-enum-order-status-filter.input';

@InputType()
export class EnumOrderStatusWithAggregatesFilter {

    @Field(() => OrderStatus, {nullable:true})
    equals?: keyof typeof OrderStatus;

    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<keyof typeof OrderStatus>;

    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<keyof typeof OrderStatus>;

    @Field(() => NestedEnumOrderStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumOrderStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    _min?: NestedEnumOrderStatusFilter;

    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    _max?: NestedEnumOrderStatusFilter;
}
