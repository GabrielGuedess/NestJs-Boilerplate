import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';
import { Type } from 'class-transformer';
import { BranchCreateWithoutTableInput } from './branch-create-without-table.input';

@InputType()
export class BranchCreateOrConnectWithoutTableInput {

    @Field(() => BranchWhereUniqueInput, {nullable:false})
    @Type(() => BranchWhereUniqueInput)
    where!: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => BranchCreateWithoutTableInput, {nullable:false})
    @Type(() => BranchCreateWithoutTableInput)
    create!: BranchCreateWithoutTableInput;
}
