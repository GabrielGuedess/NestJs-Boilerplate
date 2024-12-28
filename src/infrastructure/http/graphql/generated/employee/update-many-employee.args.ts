import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeUpdateManyMutationInput } from './employee-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EmployeeWhereInput } from './employee-where.input';

@ArgsType()
export class UpdateManyEmployeeArgs {

    @Field(() => EmployeeUpdateManyMutationInput, {nullable:false})
    @Type(() => EmployeeUpdateManyMutationInput)
    data!: EmployeeUpdateManyMutationInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    where?: EmployeeWhereInput;
}
