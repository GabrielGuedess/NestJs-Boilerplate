import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumTableStatusFieldUpdateOperationsInput } from '../prisma/enum-table-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TabUncheckedUpdateManyWithoutTableNestedInput } from '../tab/tab-unchecked-update-many-without-table-nested.input';
import { EmployeeUncheckedUpdateManyWithoutTablesNestedInput } from '../employee/employee-unchecked-update-many-without-tables-nested.input';

@InputType()
export class TableUncheckedUpdateWithoutBranchInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    capacity?: IntFieldUpdateOperationsInput;

    @Field(() => EnumTableStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumTableStatusFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    location?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    occupied_since?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TabUncheckedUpdateManyWithoutTableNestedInput, {nullable:true})
    Tabs?: TabUncheckedUpdateManyWithoutTableNestedInput;

    @Field(() => EmployeeUncheckedUpdateManyWithoutTablesNestedInput, {nullable:true})
    Employees?: EmployeeUncheckedUpdateManyWithoutTablesNestedInput;
}
