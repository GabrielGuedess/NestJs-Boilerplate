import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';
import { Type } from 'class-transformer';
import { BranchCreateWithoutProductInput } from './branch-create-without-product.input';

@InputType()
export class BranchCreateOrConnectWithoutProductInput {

    @Field(() => BranchWhereUniqueInput, {nullable:false})
    @Type(() => BranchWhereUniqueInput)
    where!: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => BranchCreateWithoutProductInput, {nullable:false})
    @Type(() => BranchCreateWithoutProductInput)
    create!: BranchCreateWithoutProductInput;
}
