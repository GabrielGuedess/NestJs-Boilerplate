import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';
import { Type } from 'class-transformer';
import { BranchCreateWithoutEmployeesInput } from './branch-create-without-employees.input';

@InputType()
export class BranchCreateOrConnectWithoutEmployeesInput {

    @Field(() => BranchWhereUniqueInput, {nullable:false})
    @Type(() => BranchWhereUniqueInput)
    where!: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => BranchCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => BranchCreateWithoutEmployeesInput)
    create!: BranchCreateWithoutEmployeesInput;
}
