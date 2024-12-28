import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TableStatus } from '../prisma/table-status.enum';
import { Branch } from '../branch/branch.model';
import { Tab } from '../tab/tab.model';
import { Employee } from '../employee/employee.model';
import { TableCount } from './table-count.output';

@ObjectType()
export class Table {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    capacity!: number;

    @Field(() => TableStatus, {nullable:false,defaultValue:'AVAILABLE'})
    status!: keyof typeof TableStatus;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => Date, {nullable:true})
    occupied_since!: Date | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    branch_id!: string;

    @Field(() => Branch, {nullable:false})
    Branch?: Branch;

    @Field(() => [Tab], {nullable:true})
    Tabs?: Array<Tab>;

    @Field(() => [Employee], {nullable:true})
    Employees?: Array<Employee>;

    @Field(() => TableCount, {nullable:false})
    _count?: TableCount;
}
