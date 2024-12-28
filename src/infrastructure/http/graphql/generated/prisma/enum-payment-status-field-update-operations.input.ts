import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentStatus } from './payment-status.enum';

@InputType()
export class EnumPaymentStatusFieldUpdateOperationsInput {

    @Field(() => PaymentStatus, {nullable:true})
    set?: keyof typeof PaymentStatus;
}
