import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentStatus } from './payment-status.enum';

@InputType()
export class NestedEnumPaymentStatusFilter {

    @Field(() => PaymentStatus, {nullable:true})
    equals?: keyof typeof PaymentStatus;

    @Field(() => [PaymentStatus], {nullable:true})
    in?: Array<keyof typeof PaymentStatus>;

    @Field(() => [PaymentStatus], {nullable:true})
    notIn?: Array<keyof typeof PaymentStatus>;

    @Field(() => NestedEnumPaymentStatusFilter, {nullable:true})
    not?: NestedEnumPaymentStatusFilter;
}
