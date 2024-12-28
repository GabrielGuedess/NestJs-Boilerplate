import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BranchWhereInput } from './branch-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBranchArgs {

    @Field(() => BranchWhereInput, {nullable:true})
    @Type(() => BranchWhereInput)
    where?: BranchWhereInput;
}
