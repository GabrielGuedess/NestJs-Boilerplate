import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchCreateWithoutEmployeesInput } from './branch-create-without-employees.input';
import { Type } from 'class-transformer';
import { BranchCreateOrConnectWithoutEmployeesInput } from './branch-create-or-connect-without-employees.input';
import { BranchUpsertWithoutEmployeesInput } from './branch-upsert-without-employees.input';
import { BranchWhereInput } from './branch-where.input';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';
import { BranchUpdateToOneWithWhereWithoutEmployeesInput } from './branch-update-to-one-with-where-without-employees.input';

@InputType()
export class BranchUpdateOneWithoutEmployeesNestedInput {

    @Field(() => BranchCreateWithoutEmployeesInput, {nullable:true})
    @Type(() => BranchCreateWithoutEmployeesInput)
    create?: BranchCreateWithoutEmployeesInput;

    @Field(() => BranchCreateOrConnectWithoutEmployeesInput, {nullable:true})
    @Type(() => BranchCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: BranchCreateOrConnectWithoutEmployeesInput;

    @Field(() => BranchUpsertWithoutEmployeesInput, {nullable:true})
    @Type(() => BranchUpsertWithoutEmployeesInput)
    upsert?: BranchUpsertWithoutEmployeesInput;

    @Field(() => BranchWhereInput, {nullable:true})
    @Type(() => BranchWhereInput)
    disconnect?: BranchWhereInput;

    @Field(() => BranchWhereInput, {nullable:true})
    @Type(() => BranchWhereInput)
    delete?: BranchWhereInput;

    @Field(() => BranchWhereUniqueInput, {nullable:true})
    @Type(() => BranchWhereUniqueInput)
    connect?: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => BranchUpdateToOneWithWhereWithoutEmployeesInput, {nullable:true})
    @Type(() => BranchUpdateToOneWithWhereWithoutEmployeesInput)
    update?: BranchUpdateToOneWithWhereWithoutEmployeesInput;
}
