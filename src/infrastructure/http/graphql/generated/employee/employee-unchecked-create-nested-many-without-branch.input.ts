import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutBranchInput } from './employee-create-without-branch.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutBranchInput } from './employee-create-or-connect-without-branch.input';
import { EmployeeCreateManyBranchInputEnvelope } from './employee-create-many-branch-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutBranchInput {

    @Field(() => [EmployeeCreateWithoutBranchInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutBranchInput)
    create?: Array<EmployeeCreateWithoutBranchInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutBranchInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutBranchInput)
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutBranchInput>;

    @Field(() => EmployeeCreateManyBranchInputEnvelope, {nullable:true})
    @Type(() => EmployeeCreateManyBranchInputEnvelope)
    createMany?: EmployeeCreateManyBranchInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>>;
}
