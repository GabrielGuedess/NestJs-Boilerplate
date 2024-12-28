import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchCreateWithoutEmployeesInput } from './branch-create-without-employees.input';
import { Type } from 'class-transformer';
import { BranchCreateOrConnectWithoutEmployeesInput } from './branch-create-or-connect-without-employees.input';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';

@InputType()
export class BranchCreateNestedOneWithoutEmployeesInput {

    @Field(() => BranchCreateWithoutEmployeesInput, {nullable:true})
    @Type(() => BranchCreateWithoutEmployeesInput)
    create?: BranchCreateWithoutEmployeesInput;

    @Field(() => BranchCreateOrConnectWithoutEmployeesInput, {nullable:true})
    @Type(() => BranchCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: BranchCreateOrConnectWithoutEmployeesInput;

    @Field(() => BranchWhereUniqueInput, {nullable:true})
    @Type(() => BranchWhereUniqueInput)
    connect?: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;
}
