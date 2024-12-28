import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchCreateWithoutCategoryInput } from './branch-create-without-category.input';
import { Type } from 'class-transformer';
import { BranchCreateOrConnectWithoutCategoryInput } from './branch-create-or-connect-without-category.input';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';

@InputType()
export class BranchCreateNestedOneWithoutCategoryInput {

    @Field(() => BranchCreateWithoutCategoryInput, {nullable:true})
    @Type(() => BranchCreateWithoutCategoryInput)
    create?: BranchCreateWithoutCategoryInput;

    @Field(() => BranchCreateOrConnectWithoutCategoryInput, {nullable:true})
    @Type(() => BranchCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: BranchCreateOrConnectWithoutCategoryInput;

    @Field(() => BranchWhereUniqueInput, {nullable:true})
    @Type(() => BranchWhereUniqueInput)
    connect?: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;
}
