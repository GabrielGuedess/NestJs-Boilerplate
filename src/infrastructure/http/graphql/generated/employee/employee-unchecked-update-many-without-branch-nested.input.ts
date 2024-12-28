import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutBranchInput } from './employee-create-without-branch.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutBranchInput } from './employee-create-or-connect-without-branch.input';
import { EmployeeUpsertWithWhereUniqueWithoutBranchInput } from './employee-upsert-with-where-unique-without-branch.input';
import { EmployeeCreateManyBranchInputEnvelope } from './employee-create-many-branch-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutBranchInput } from './employee-update-with-where-unique-without-branch.input';
import { EmployeeUpdateManyWithWhereWithoutBranchInput } from './employee-update-many-with-where-without-branch.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUncheckedUpdateManyWithoutBranchNestedInput {

    @Field(() => [EmployeeCreateWithoutBranchInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutBranchInput)
    create?: Array<EmployeeCreateWithoutBranchInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutBranchInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutBranchInput)
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutBranchInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutBranchInput], {nullable:true})
    @Type(() => EmployeeUpsertWithWhereUniqueWithoutBranchInput)
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutBranchInput>;

    @Field(() => EmployeeCreateManyBranchInputEnvelope, {nullable:true})
    @Type(() => EmployeeCreateManyBranchInputEnvelope)
    createMany?: EmployeeCreateManyBranchInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>>;

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutBranchInput], {nullable:true})
    @Type(() => EmployeeUpdateWithWhereUniqueWithoutBranchInput)
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutBranchInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutBranchInput], {nullable:true})
    @Type(() => EmployeeUpdateManyWithWhereWithoutBranchInput)
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutBranchInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    @Type(() => EmployeeScalarWhereInput)
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
