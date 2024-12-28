import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereInput } from './employee-where.input';

@InputType()
export class EmployeeNullableRelationFilter {

    @Field(() => EmployeeWhereInput, {nullable:true})
    is?: EmployeeWhereInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    isNot?: EmployeeWhereInput;
}
