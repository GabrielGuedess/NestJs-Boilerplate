import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchCreateWithoutTableInput } from './branch-create-without-table.input';
import { Type } from 'class-transformer';
import { BranchCreateOrConnectWithoutTableInput } from './branch-create-or-connect-without-table.input';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';

@InputType()
export class BranchCreateNestedOneWithoutTableInput {

    @Field(() => BranchCreateWithoutTableInput, {nullable:true})
    @Type(() => BranchCreateWithoutTableInput)
    create?: BranchCreateWithoutTableInput;

    @Field(() => BranchCreateOrConnectWithoutTableInput, {nullable:true})
    @Type(() => BranchCreateOrConnectWithoutTableInput)
    connectOrCreate?: BranchCreateOrConnectWithoutTableInput;

    @Field(() => BranchWhereUniqueInput, {nullable:true})
    @Type(() => BranchWhereUniqueInput)
    connect?: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;
}
