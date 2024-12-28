import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BranchUpdateInput } from './branch-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';

@ArgsType()
export class UpdateOneBranchArgs {

    @Field(() => BranchUpdateInput, {nullable:false})
    @Type(() => BranchUpdateInput)
    data!: BranchUpdateInput;

    @Field(() => BranchWhereUniqueInput, {nullable:false})
    @Type(() => BranchWhereUniqueInput)
    where!: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;
}
