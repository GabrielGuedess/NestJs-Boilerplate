import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BranchCreateManyInput } from './branch-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBranchArgs {

    @Field(() => [BranchCreateManyInput], {nullable:false})
    @Type(() => BranchCreateManyInput)
    data!: Array<BranchCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
