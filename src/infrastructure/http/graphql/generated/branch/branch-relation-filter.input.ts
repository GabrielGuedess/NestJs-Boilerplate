import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchWhereInput } from './branch-where.input';

@InputType()
export class BranchRelationFilter {

    @Field(() => BranchWhereInput, {nullable:true})
    is?: BranchWhereInput;

    @Field(() => BranchWhereInput, {nullable:true})
    isNot?: BranchWhereInput;
}
