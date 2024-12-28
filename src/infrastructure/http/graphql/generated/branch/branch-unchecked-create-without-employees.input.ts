import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableUncheckedCreateNestedManyWithoutBranchInput } from '../table/table-unchecked-create-nested-many-without-branch.input';
import { CategoryUncheckedCreateNestedManyWithoutBranchInput } from '../category/category-unchecked-create-nested-many-without-branch.input';
import { ProductUncheckedCreateNestedManyWithoutBranchInput } from '../product/product-unchecked-create-nested-many-without-branch.input';

@InputType()
export class BranchUncheckedCreateWithoutEmployeesInput {

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

    @Field(() => String, {nullable:false})
    customer_id!: string;

    @Field(() => TableUncheckedCreateNestedManyWithoutBranchInput, {nullable:true})
    Table?: TableUncheckedCreateNestedManyWithoutBranchInput;

    @Field(() => CategoryUncheckedCreateNestedManyWithoutBranchInput, {nullable:true})
    Category?: CategoryUncheckedCreateNestedManyWithoutBranchInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutBranchInput, {nullable:true})
    Product?: ProductUncheckedCreateNestedManyWithoutBranchInput;
}
