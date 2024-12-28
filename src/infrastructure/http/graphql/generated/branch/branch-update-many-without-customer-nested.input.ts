import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchCreateWithoutCustomerInput } from './branch-create-without-customer.input';
import { Type } from 'class-transformer';
import { BranchCreateOrConnectWithoutCustomerInput } from './branch-create-or-connect-without-customer.input';
import { BranchUpsertWithWhereUniqueWithoutCustomerInput } from './branch-upsert-with-where-unique-without-customer.input';
import { BranchCreateManyCustomerInputEnvelope } from './branch-create-many-customer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';
import { BranchUpdateWithWhereUniqueWithoutCustomerInput } from './branch-update-with-where-unique-without-customer.input';
import { BranchUpdateManyWithWhereWithoutCustomerInput } from './branch-update-many-with-where-without-customer.input';
import { BranchScalarWhereInput } from './branch-scalar-where.input';

@InputType()
export class BranchUpdateManyWithoutCustomerNestedInput {

    @Field(() => [BranchCreateWithoutCustomerInput], {nullable:true})
    @Type(() => BranchCreateWithoutCustomerInput)
    create?: Array<BranchCreateWithoutCustomerInput>;

    @Field(() => [BranchCreateOrConnectWithoutCustomerInput], {nullable:true})
    @Type(() => BranchCreateOrConnectWithoutCustomerInput)
    connectOrCreate?: Array<BranchCreateOrConnectWithoutCustomerInput>;

    @Field(() => [BranchUpsertWithWhereUniqueWithoutCustomerInput], {nullable:true})
    @Type(() => BranchUpsertWithWhereUniqueWithoutCustomerInput)
    upsert?: Array<BranchUpsertWithWhereUniqueWithoutCustomerInput>;

    @Field(() => BranchCreateManyCustomerInputEnvelope, {nullable:true})
    @Type(() => BranchCreateManyCustomerInputEnvelope)
    createMany?: BranchCreateManyCustomerInputEnvelope;

    @Field(() => [BranchWhereUniqueInput], {nullable:true})
    @Type(() => BranchWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>>;

    @Field(() => [BranchWhereUniqueInput], {nullable:true})
    @Type(() => BranchWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>>;

    @Field(() => [BranchWhereUniqueInput], {nullable:true})
    @Type(() => BranchWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>>;

    @Field(() => [BranchWhereUniqueInput], {nullable:true})
    @Type(() => BranchWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>>;

    @Field(() => [BranchUpdateWithWhereUniqueWithoutCustomerInput], {nullable:true})
    @Type(() => BranchUpdateWithWhereUniqueWithoutCustomerInput)
    update?: Array<BranchUpdateWithWhereUniqueWithoutCustomerInput>;

    @Field(() => [BranchUpdateManyWithWhereWithoutCustomerInput], {nullable:true})
    @Type(() => BranchUpdateManyWithWhereWithoutCustomerInput)
    updateMany?: Array<BranchUpdateManyWithWhereWithoutCustomerInput>;

    @Field(() => [BranchScalarWhereInput], {nullable:true})
    @Type(() => BranchScalarWhereInput)
    deleteMany?: Array<BranchScalarWhereInput>;
}
