import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CustomerWhereInput } from '../customer/customer-where.input';
import { EmployeeListRelationFilter } from '../employee/employee-list-relation-filter.input';
import { TableListRelationFilter } from '../table/table-list-relation-filter.input';
import { CategoryListRelationFilter } from '../category/category-list-relation-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';

@InputType()
export class BranchWhereInput {

    @Field(() => [BranchWhereInput], {nullable:true})
    AND?: Array<BranchWhereInput>;

    @Field(() => [BranchWhereInput], {nullable:true})
    OR?: Array<BranchWhereInput>;

    @Field(() => [BranchWhereInput], {nullable:true})
    NOT?: Array<BranchWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    cnpj?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    zip_code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address_number?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address_complement?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address_neighborhood?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    state?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    branch_name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UuidFilter, {nullable:true})
    customer_id?: UuidFilter;

    @Field(() => CustomerWhereInput, {nullable:true})
    Customer?: CustomerWhereInput;

    @Field(() => EmployeeListRelationFilter, {nullable:true})
    Employees?: EmployeeListRelationFilter;

    @Field(() => TableListRelationFilter, {nullable:true})
    Table?: TableListRelationFilter;

    @Field(() => CategoryListRelationFilter, {nullable:true})
    Category?: CategoryListRelationFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    Product?: ProductListRelationFilter;
}
