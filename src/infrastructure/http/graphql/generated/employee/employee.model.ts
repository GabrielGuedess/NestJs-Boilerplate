import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Branch } from '../branch/branch.model';
import { Table } from '../table/table.model';
import { EmployeeCount } from './employee-count.output';

@ObjectType()
export class Employee {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    branch_id!: string;

    @Field(() => User, {nullable:false})
    User?: User;

    @Field(() => Branch, {nullable:false})
    Branch?: Branch;

    @Field(() => [Table], {nullable:true})
    Tables?: Array<Table>;

    @Field(() => EmployeeCount, {nullable:false})
    _count?: EmployeeCount;
}
