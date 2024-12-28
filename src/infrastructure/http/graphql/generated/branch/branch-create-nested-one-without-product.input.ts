import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchCreateWithoutProductInput } from './branch-create-without-product.input';
import { Type } from 'class-transformer';
import { BranchCreateOrConnectWithoutProductInput } from './branch-create-or-connect-without-product.input';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';

@InputType()
export class BranchCreateNestedOneWithoutProductInput {

    @Field(() => BranchCreateWithoutProductInput, {nullable:true})
    @Type(() => BranchCreateWithoutProductInput)
    create?: BranchCreateWithoutProductInput;

    @Field(() => BranchCreateOrConnectWithoutProductInput, {nullable:true})
    @Type(() => BranchCreateOrConnectWithoutProductInput)
    connectOrCreate?: BranchCreateOrConnectWithoutProductInput;

    @Field(() => BranchWhereUniqueInput, {nullable:true})
    @Type(() => BranchWhereUniqueInput)
    connect?: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;
}
