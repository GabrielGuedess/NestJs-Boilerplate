import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutBranchesInput } from './customer-create-without-branches.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutBranchesInput } from './customer-create-or-connect-without-branches.input';
import { CustomerUpsertWithoutBranchesInput } from './customer-upsert-without-branches.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateToOneWithWhereWithoutBranchesInput } from './customer-update-to-one-with-where-without-branches.input';

@InputType()
export class CustomerUpdateOneRequiredWithoutBranchesNestedInput {

    @Field(() => CustomerCreateWithoutBranchesInput, {nullable:true})
    @Type(() => CustomerCreateWithoutBranchesInput)
    create?: CustomerCreateWithoutBranchesInput;

    @Field(() => CustomerCreateOrConnectWithoutBranchesInput, {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutBranchesInput)
    connectOrCreate?: CustomerCreateOrConnectWithoutBranchesInput;

    @Field(() => CustomerUpsertWithoutBranchesInput, {nullable:true})
    @Type(() => CustomerUpsertWithoutBranchesInput)
    upsert?: CustomerUpsertWithoutBranchesInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    connect?: Prisma.AtLeast<CustomerWhereUniqueInput, 'id' | 'cnpj' | 'user_id'>;

    @Field(() => CustomerUpdateToOneWithWhereWithoutBranchesInput, {nullable:true})
    @Type(() => CustomerUpdateToOneWithWhereWithoutBranchesInput)
    update?: CustomerUpdateToOneWithWhereWithoutBranchesInput;
}
