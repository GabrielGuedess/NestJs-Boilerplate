import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutUserInput } from './employee-update-without-user.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutUserInput } from './employee-create-without-user.input';
import { EmployeeWhereInput } from './employee-where.input';

@InputType()
export class EmployeeUpsertWithoutUserInput {

    @Field(() => EmployeeUpdateWithoutUserInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutUserInput)
    update!: EmployeeUpdateWithoutUserInput;

    @Field(() => EmployeeCreateWithoutUserInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutUserInput)
    create!: EmployeeCreateWithoutUserInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    where?: EmployeeWhereInput;
}
