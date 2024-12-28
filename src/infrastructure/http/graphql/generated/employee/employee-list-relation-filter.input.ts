import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereInput } from './employee-where.input';

@InputType()
export class EmployeeListRelationFilter {

    @Field(() => EmployeeWhereInput, {nullable:true})
    every?: EmployeeWhereInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    some?: EmployeeWhereInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    none?: EmployeeWhereInput;
}
