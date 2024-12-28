import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BranchUpdateManyMutationInput } from './branch-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BranchWhereInput } from './branch-where.input';

@ArgsType()
export class UpdateManyBranchArgs {

    @Field(() => BranchUpdateManyMutationInput, {nullable:false})
    @Type(() => BranchUpdateManyMutationInput)
    data!: BranchUpdateManyMutationInput;

    @Field(() => BranchWhereInput, {nullable:true})
    @Type(() => BranchWhereInput)
    where?: BranchWhereInput;
}
