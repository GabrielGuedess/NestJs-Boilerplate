import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutBranchInput } from './employee-update-without-branch.input';

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutBranchInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => EmployeeUpdateWithoutBranchInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutBranchInput)
    data!: EmployeeUpdateWithoutBranchInput;
}
