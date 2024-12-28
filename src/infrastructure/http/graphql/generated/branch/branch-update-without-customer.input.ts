import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EmployeeUpdateManyWithoutBranchNestedInput } from '../employee/employee-update-many-without-branch-nested.input';
import { TableUpdateManyWithoutBranchNestedInput } from '../table/table-update-many-without-branch-nested.input';
import { CategoryUpdateManyWithoutBranchNestedInput } from '../category/category-update-many-without-branch-nested.input';
import { ProductUpdateManyWithoutBranchNestedInput } from '../product/product-update-many-without-branch-nested.input';

@InputType()
export class BranchUpdateWithoutCustomerInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cnpj?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    zip_code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address_number?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address_complement?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address_neighborhood?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    city?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    state?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    branch_name?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EmployeeUpdateManyWithoutBranchNestedInput, {nullable:true})
    Employees?: EmployeeUpdateManyWithoutBranchNestedInput;

    @Field(() => TableUpdateManyWithoutBranchNestedInput, {nullable:true})
    Table?: TableUpdateManyWithoutBranchNestedInput;

    @Field(() => CategoryUpdateManyWithoutBranchNestedInput, {nullable:true})
    Category?: CategoryUpdateManyWithoutBranchNestedInput;

    @Field(() => ProductUpdateManyWithoutBranchNestedInput, {nullable:true})
    Product?: ProductUpdateManyWithoutBranchNestedInput;
}
