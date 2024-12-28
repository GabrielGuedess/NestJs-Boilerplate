import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from './order-status.enum';

@InputType()
export class NestedEnumOrderStatusFilter {

    @Field(() => OrderStatus, {nullable:true})
    equals?: keyof typeof OrderStatus;

    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<keyof typeof OrderStatus>;

    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<keyof typeof OrderStatus>;

    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    not?: NestedEnumOrderStatusFilter;
}
