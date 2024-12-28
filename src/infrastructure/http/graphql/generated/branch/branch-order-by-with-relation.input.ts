import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CustomerOrderByWithRelationInput } from '../customer/customer-order-by-with-relation.input';
import { EmployeeOrderByRelationAggregateInput } from '../employee/employee-order-by-relation-aggregate.input';
import { TableOrderByRelationAggregateInput } from '../table/table-order-by-relation-aggregate.input';
import { CategoryOrderByRelationAggregateInput } from '../category/category-order-by-relation-aggregate.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';

@InputType()
export class BranchOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cnpj?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    zip_code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address_complement?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address_neighborhood?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    state?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    branch_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customer_id?: keyof typeof SortOrder;

    @Field(() => CustomerOrderByWithRelationInput, {nullable:true})
    Customer?: CustomerOrderByWithRelationInput;

    @Field(() => EmployeeOrderByRelationAggregateInput, {nullable:true})
    Employees?: EmployeeOrderByRelationAggregateInput;

    @Field(() => TableOrderByRelationAggregateInput, {nullable:true})
    Table?: TableOrderByRelationAggregateInput;

    @Field(() => CategoryOrderByRelationAggregateInput, {nullable:true})
    Category?: CategoryOrderByRelationAggregateInput;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    Product?: ProductOrderByRelationAggregateInput;
}
