import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentStatus } from './payment-status.enum';
import { NestedEnumPaymentStatusWithAggregatesFilter } from './nested-enum-payment-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPaymentStatusFilter } from './nested-enum-payment-status-filter.input';

@InputType()
export class EnumPaymentStatusWithAggregatesFilter {

    @Field(() => PaymentStatus, {nullable:true})
    equals?: keyof typeof PaymentStatus;

    @Field(() => [PaymentStatus], {nullable:true})
    in?: Array<keyof typeof PaymentStatus>;

    @Field(() => [PaymentStatus], {nullable:true})
    notIn?: Array<keyof typeof PaymentStatus>;

    @Field(() => NestedEnumPaymentStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPaymentStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPaymentStatusFilter, {nullable:true})
    _min?: NestedEnumPaymentStatusFilter;

    @Field(() => NestedEnumPaymentStatusFilter, {nullable:true})
    _max?: NestedEnumPaymentStatusFilter;
}
