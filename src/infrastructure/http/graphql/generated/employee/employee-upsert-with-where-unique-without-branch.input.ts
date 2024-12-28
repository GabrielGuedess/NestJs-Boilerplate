import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutBranchInput } from './employee-update-without-branch.input';
import { EmployeeCreateWithoutBranchInput } from './employee-create-without-branch.input';

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutBranchInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => EmployeeUpdateWithoutBranchInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutBranchInput)
    update!: EmployeeUpdateWithoutBranchInput;

    @Field(() => EmployeeCreateWithoutBranchInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutBranchInput)
    create!: EmployeeCreateWithoutBranchInput;
}
