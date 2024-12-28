import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from './order-status.enum';

@InputType()
export class EnumOrderStatusFieldUpdateOperationsInput {

    @Field(() => OrderStatus, {nullable:true})
    set?: keyof typeof OrderStatus;
}
