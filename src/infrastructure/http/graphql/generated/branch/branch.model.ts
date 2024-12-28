import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Customer } from '../customer/customer.model';
import { Employee } from '../employee/employee.model';
import { Table } from '../table/table.model';
import { Category } from '../category/category.model';
import { Product } from '../product/product.model';
import { BranchCount } from './branch-count.output';

@ObjectType()
export class Branch {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    cnpj!: string;

    @Field(() => String, {nullable:false})
    zip_code!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    address_number!: string;

    @Field(() => String, {nullable:false})
    address_complement!: string;

    @Field(() => String, {nullable:false})
    address_neighborhood!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => String, {nullable:false})
    branch_name!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    customer_id!: string;

    @Field(() => Customer, {nullable:false})
    Customer?: Customer;

    @Field(() => [Employee], {nullable:true})
    Employees?: Array<Employee>;

    @Field(() => [Table], {nullable:true})
    Table?: Array<Table>;

    @Field(() => [Category], {nullable:true})
    Category?: Array<Category>;

    @Field(() => [Product], {nullable:true})
    Product?: Array<Product>;

    @Field(() => BranchCount, {nullable:false})
    _count?: BranchCount;
}
