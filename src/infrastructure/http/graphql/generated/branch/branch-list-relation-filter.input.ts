import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchWhereInput } from './branch-where.input';

@InputType()
export class BranchListRelationFilter {

    @Field(() => BranchWhereInput, {nullable:true})
    every?: BranchWhereInput;

    @Field(() => BranchWhereInput, {nullable:true})
    some?: BranchWhereInput;

    @Field(() => BranchWhereInput, {nullable:true})
    none?: BranchWhereInput;
}
