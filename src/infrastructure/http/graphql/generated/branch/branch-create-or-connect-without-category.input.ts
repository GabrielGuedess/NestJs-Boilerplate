import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';
import { Type } from 'class-transformer';
import { BranchCreateWithoutCategoryInput } from './branch-create-without-category.input';

@InputType()
export class BranchCreateOrConnectWithoutCategoryInput {

    @Field(() => BranchWhereUniqueInput, {nullable:false})
    @Type(() => BranchWhereUniqueInput)
    where!: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => BranchCreateWithoutCategoryInput, {nullable:false})
    @Type(() => BranchCreateWithoutCategoryInput)
    create!: BranchCreateWithoutCategoryInput;
}
