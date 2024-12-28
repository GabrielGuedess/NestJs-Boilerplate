import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereInput } from './employee-where.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutUserInput } from './employee-update-without-user.input';

@InputType()
export class EmployeeUpdateToOneWithWhereWithoutUserInput {

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    where?: EmployeeWhereInput;

    @Field(() => EmployeeUpdateWithoutUserInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutUserInput)
    data!: EmployeeUpdateWithoutUserInput;
}
