import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchCreateWithoutCustomerInput } from './branch-create-without-customer.input';
import { Type } from 'class-transformer';
import { BranchCreateOrConnectWithoutCustomerInput } from './branch-create-or-connect-without-customer.input';
import { BranchCreateManyCustomerInputEnvelope } from './branch-create-many-customer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';

@InputType()
export class BranchCreateNestedManyWithoutCustomerInput {

    @Field(() => [BranchCreateWithoutCustomerInput], {nullable:true})
    @Type(() => BranchCreateWithoutCustomerInput)
    create?: Array<BranchCreateWithoutCustomerInput>;

    @Field(() => [BranchCreateOrConnectWithoutCustomerInput], {nullable:true})
    @Type(() => BranchCreateOrConnectWithoutCustomerInput)
    connectOrCreate?: Array<BranchCreateOrConnectWithoutCustomerInput>;

    @Field(() => BranchCreateManyCustomerInputEnvelope, {nullable:true})
    @Type(() => BranchCreateManyCustomerInputEnvelope)
    createMany?: BranchCreateManyCustomerInputEnvelope;

    @Field(() => [BranchWhereUniqueInput], {nullable:true})
    @Type(() => BranchWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>>;
}
