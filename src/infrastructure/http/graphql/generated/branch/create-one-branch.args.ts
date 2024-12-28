import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BranchCreateInput } from './branch-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBranchArgs {

    @Field(() => BranchCreateInput, {nullable:false})
    @Type(() => BranchCreateInput)
    data!: BranchCreateInput;
}
