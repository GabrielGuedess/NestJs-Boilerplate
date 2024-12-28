import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableUncheckedCreateNestedManyWithoutEmployeesInput } from '../table/table-unchecked-create-nested-many-without-employees.input';

@InputType()
export class EmployeeUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    branch_id!: string;

    @Field(() => TableUncheckedCreateNestedManyWithoutEmployeesInput, {nullable:true})
    Tables?: TableUncheckedCreateNestedManyWithoutEmployeesInput;
}
