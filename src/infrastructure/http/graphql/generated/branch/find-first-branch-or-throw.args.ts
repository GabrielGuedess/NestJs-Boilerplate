import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BranchWhereInput } from './branch-where.input';
import { Type } from 'class-transformer';
import { BranchOrderByWithRelationInput } from './branch-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BranchScalarFieldEnum } from './branch-scalar-field.enum';

@ArgsType()
export class FindFirstBranchOrThrowArgs {

    @Field(() => BranchWhereInput, {nullable:true})
    @Type(() => BranchWhereInput)
    where?: BranchWhereInput;

    @Field(() => [BranchOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BranchOrderByWithRelationInput>;

    @Field(() => BranchWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BranchScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BranchScalarFieldEnum>;
}
