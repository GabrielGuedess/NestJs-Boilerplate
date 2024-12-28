import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BranchUpdateOneRequiredWithoutEmployeesNestedInput } from '../branch/branch-update-one-required-without-employees-nested.input';
import { TableUpdateManyWithoutEmployeesNestedInput } from '../table/table-update-many-without-employees-nested.input';

@InputType()
export class EmployeeUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BranchUpdateOneRequiredWithoutEmployeesNestedInput, {nullable:true})
    Branch?: BranchUpdateOneRequiredWithoutEmployeesNestedInput;

    @Field(() => TableUpdateManyWithoutEmployeesNestedInput, {nullable:true})
    Tables?: TableUpdateManyWithoutEmployeesNestedInput;
}
