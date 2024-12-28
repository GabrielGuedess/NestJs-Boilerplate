import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabStatus } from '../prisma/tab-status.enum';
import { Int } from '@nestjs/graphql';
import { TableCreateNestedOneWithoutTabsInput } from '../table/table-create-nested-one-without-tabs.input';
import { OrderCreateNestedManyWithoutTabInput } from '../order/order-create-nested-many-without-tab.input';

@InputType()
export class TabCreateInput {

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

    @Field(() => TableCreateNestedOneWithoutTabsInput, {nullable:false})
    Table!: TableCreateNestedOneWithoutTabsInput;

    @Field(() => OrderCreateNestedManyWithoutTabInput, {nullable:true})
    Orders?: OrderCreateNestedManyWithoutTabInput;
}
