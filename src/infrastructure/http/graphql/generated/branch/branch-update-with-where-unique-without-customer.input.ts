import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';
import { Type } from 'class-transformer';
import { BranchUpdateWithoutCustomerInput } from './branch-update-without-customer.input';

@InputType()
export class BranchUpdateWithWhereUniqueWithoutCustomerInput {

    @Field(() => BranchWhereUniqueInput, {nullable:false})
    @Type(() => BranchWhereUniqueInput)
    where!: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => BranchUpdateWithoutCustomerInput, {nullable:false})
    @Type(() => BranchUpdateWithoutCustomerInput)
    data!: BranchUpdateWithoutCustomerInput;
}
