import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutEmployeeInput } from '../user/user-create-nested-one-without-employee.input';
import { TableCreateNestedManyWithoutEmployeesInput } from '../table/table-create-nested-many-without-employees.input';

@InputType()
export class EmployeeCreateWithoutBranchInput {

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

    @Field(() => UserCreateNestedOneWithoutEmployeeInput, {nullable:false})
    User!: UserCreateNestedOneWithoutEmployeeInput;

    @Field(() => TableCreateNestedManyWithoutEmployeesInput, {nullable:true})
    Tables?: TableCreateNestedManyWithoutEmployeesInput;
}
