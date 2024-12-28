import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';
import { Type } from 'class-transformer';
import { BranchCreateWithoutCustomerInput } from './branch-create-without-customer.input';

@InputType()
export class BranchCreateOrConnectWithoutCustomerInput {

    @Field(() => BranchWhereUniqueInput, {nullable:false})
    @Type(() => BranchWhereUniqueInput)
    where!: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => BranchCreateWithoutCustomerInput, {nullable:false})
    @Type(() => BranchCreateWithoutCustomerInput)
    create!: BranchCreateWithoutCustomerInput;
}
