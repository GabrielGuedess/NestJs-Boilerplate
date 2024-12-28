import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateNestedOneWithoutBranchesInput } from '../customer/customer-create-nested-one-without-branches.input';
import { TableCreateNestedManyWithoutBranchInput } from '../table/table-create-nested-many-without-branch.input';
import { CategoryCreateNestedManyWithoutBranchInput } from '../category/category-create-nested-many-without-branch.input';
import { ProductCreateNestedManyWithoutBranchInput } from '../product/product-create-nested-many-without-branch.input';

@InputType()
export class BranchCreateWithoutEmployeesInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => CustomerCreateNestedOneWithoutBranchesInput, {nullable:false})
    Customer!: CustomerCreateNestedOneWithoutBranchesInput;

    @Field(() => TableCreateNestedManyWithoutBranchInput, {nullable:true})
    Table?: TableCreateNestedManyWithoutBranchInput;

    @Field(() => CategoryCreateNestedManyWithoutBranchInput, {nullable:true})
    Category?: CategoryCreateNestedManyWithoutBranchInput;

    @Field(() => ProductCreateNestedManyWithoutBranchInput, {nullable:true})
    Product?: ProductCreateNestedManyWithoutBranchInput;
}
