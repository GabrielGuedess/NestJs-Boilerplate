import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EmployeeUncheckedUpdateManyWithoutBranchNestedInput } from '../employee/employee-unchecked-update-many-without-branch-nested.input';
import { TableUncheckedUpdateManyWithoutBranchNestedInput } from '../table/table-unchecked-update-many-without-branch-nested.input';
import { CategoryUncheckedUpdateManyWithoutBranchNestedInput } from '../category/category-unchecked-update-many-without-branch-nested.input';
import { ProductUncheckedUpdateManyWithoutBranchNestedInput } from '../product/product-unchecked-update-many-without-branch-nested.input';

@InputType()
export class BranchUncheckedUpdateInput {

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

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    customer_id?: StringFieldUpdateOperationsInput;

    @Field(() => EmployeeUncheckedUpdateManyWithoutBranchNestedInput, {nullable:true})
    Employees?: EmployeeUncheckedUpdateManyWithoutBranchNestedInput;

    @Field(() => TableUncheckedUpdateManyWithoutBranchNestedInput, {nullable:true})
    Table?: TableUncheckedUpdateManyWithoutBranchNestedInput;

    @Field(() => CategoryUncheckedUpdateManyWithoutBranchNestedInput, {nullable:true})
    Category?: CategoryUncheckedUpdateManyWithoutBranchNestedInput;

    @Field(() => ProductUncheckedUpdateManyWithoutBranchNestedInput, {nullable:true})
    Product?: ProductUncheckedUpdateManyWithoutBranchNestedInput;
}
