import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateManyMutationInput } from './employee-update-many-mutation.input';

@InputType()
export class EmployeeUpdateManyWithWhereWithoutTablesInput {

    @Field(() => EmployeeScalarWhereInput, {nullable:false})
    @Type(() => EmployeeScalarWhereInput)
    where!: EmployeeScalarWhereInput;

    @Field(() => EmployeeUpdateManyMutationInput, {nullable:false})
    @Type(() => EmployeeUpdateManyMutationInput)
    data!: EmployeeUpdateManyMutationInput;
}
