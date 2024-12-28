import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutBranchInput } from './employee-create-without-branch.input';

@InputType()
export class EmployeeCreateOrConnectWithoutBranchInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => EmployeeCreateWithoutBranchInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutBranchInput)
    create!: EmployeeCreateWithoutBranchInput;
}
