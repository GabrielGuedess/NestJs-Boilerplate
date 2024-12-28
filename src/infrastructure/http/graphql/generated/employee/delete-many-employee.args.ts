import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeWhereInput } from './employee-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyEmployeeArgs {

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    where?: EmployeeWhereInput;
}
