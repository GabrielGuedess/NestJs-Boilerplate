import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutBranchesInput } from './customer-create-without-branches.input';

@InputType()
export class CustomerCreateOrConnectWithoutBranchesInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'id' | 'cnpj' | 'user_id'>;

    @Field(() => CustomerCreateWithoutBranchesInput, {nullable:false})
    @Type(() => CustomerCreateWithoutBranchesInput)
    create!: CustomerCreateWithoutBranchesInput;
}
