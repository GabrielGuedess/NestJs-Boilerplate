import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutBranchesInput } from './customer-create-without-branches.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutBranchesInput } from './customer-create-or-connect-without-branches.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerCreateNestedOneWithoutBranchesInput {

    @Field(() => CustomerCreateWithoutBranchesInput, {nullable:true})
    @Type(() => CustomerCreateWithoutBranchesInput)
    create?: CustomerCreateWithoutBranchesInput;

    @Field(() => CustomerCreateOrConnectWithoutBranchesInput, {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutBranchesInput)
    connectOrCreate?: CustomerCreateOrConnectWithoutBranchesInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    connect?: Prisma.AtLeast<CustomerWhereUniqueInput, 'id' | 'cnpj' | 'user_id'>;
}
