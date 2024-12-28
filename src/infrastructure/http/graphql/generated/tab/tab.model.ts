import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TabStatus } from '../prisma/tab-status.enum';
import { Int } from '@nestjs/graphql';
import { Table } from '../table/table.model';
import { Order } from '../order/order.model';
import { TabCount } from './tab-count.output';

@ObjectType()
export class Tab {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => TabStatus, {nullable:false,defaultValue:'OPEN'})
    status!: keyof typeof TabStatus;

    @Field(() => Int, {nullable:false})
    value!: number;

    @Field(() => String, {nullable:false})
    payment_method!: string;

    @Field(() => String, {nullable:true})
    observations!: string | null;

    @Field(() => Int, {nullable:true})
    employee_tax!: number | null;

    @Field(() => Int, {nullable:true})
    discount!: number | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    table_id!: string;

    @Field(() => Table, {nullable:false})
    Table?: Table;

    @Field(() => [Order], {nullable:true})
    Orders?: Array<Order>;

    @Field(() => TabCount, {nullable:false})
    _count?: TabCount;
}
