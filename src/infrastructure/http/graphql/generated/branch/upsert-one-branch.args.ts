import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';
import { Type } from 'class-transformer';
import { BranchCreateInput } from './branch-create.input';
import { BranchUpdateInput } from './branch-update.input';

@ArgsType()
export class UpsertOneBranchArgs {

    @Field(() => BranchWhereUniqueInput, {nullable:false})
    @Type(() => BranchWhereUniqueInput)
    where!: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => BranchCreateInput, {nullable:false})
    @Type(() => BranchCreateInput)
    create!: BranchCreateInput;

    @Field(() => BranchUpdateInput, {nullable:false})
    @Type(() => BranchUpdateInput)
    update!: BranchUpdateInput;
}
