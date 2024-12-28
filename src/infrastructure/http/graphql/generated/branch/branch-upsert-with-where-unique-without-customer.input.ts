import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';
import { Type } from 'class-transformer';
import { BranchUpdateWithoutCustomerInput } from './branch-update-without-customer.input';
import { BranchCreateWithoutCustomerInput } from './branch-create-without-customer.input';

@InputType()
export class BranchUpsertWithWhereUniqueWithoutCustomerInput {

    @Field(() => BranchWhereUniqueInput, {nullable:false})
    @Type(() => BranchWhereUniqueInput)
    where!: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => BranchUpdateWithoutCustomerInput, {nullable:false})
    @Type(() => BranchUpdateWithoutCustomerInput)
    update!: BranchUpdateWithoutCustomerInput;

    @Field(() => BranchCreateWithoutCustomerInput, {nullable:false})
    @Type(() => BranchCreateWithoutCustomerInput)
    create!: BranchCreateWithoutCustomerInput;
}
