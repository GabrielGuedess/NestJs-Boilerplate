import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchWhereInput } from './branch-where.input';

@InputType()
export class BranchNullableRelationFilter {

    @Field(() => BranchWhereInput, {nullable:true})
    is?: BranchWhereInput;

    @Field(() => BranchWhereInput, {nullable:true})
    isNot?: BranchWhereInput;
}
