import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BranchWhereInput } from './branch-where.input';
import { Type } from 'class-transformer';
import { BranchOrderByWithRelationInput } from './branch-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BranchCountAggregateInput } from './branch-count-aggregate.input';
import { BranchMinAggregateInput } from './branch-min-aggregate.input';
import { BranchMaxAggregateInput } from './branch-max-aggregate.input';

@ArgsType()
export class BranchAggregateArgs {

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

    @Field(() => BranchCountAggregateInput, {nullable:true})
    _count?: BranchCountAggregateInput;

    @Field(() => BranchMinAggregateInput, {nullable:true})
    _min?: BranchMinAggregateInput;

    @Field(() => BranchMaxAggregateInput, {nullable:true})
    _max?: BranchMaxAggregateInput;
}
