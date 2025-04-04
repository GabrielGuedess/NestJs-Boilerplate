import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabStatus } from '../prisma/tab-status.enum';
import { Int } from '@nestjs/graphql';
import { OrderUncheckedCreateNestedManyWithoutTabInput } from '../order/order-unchecked-create-nested-many-without-tab.input';

@InputType()
export class TabUncheckedCreateWithoutTableInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TabStatus, {nullable:true})
    status?: keyof typeof TabStatus;

    @Field(() => Int, {nullable:false})
    value!: number;

    @Field(() => String, {nullable:false})
    payment_method!: string;

    @Field(() => String, {nullable:true})
    observations?: string;

    @Field(() => Int, {nullable:true})
    employee_tax?: number;

    @Field(() => Int, {nullable:true})
    discount?: number;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => OrderUncheckedCreateNestedManyWithoutTabInput, {nullable:true})
    Orders?: OrderUncheckedCreateNestedManyWithoutTabInput;
}
