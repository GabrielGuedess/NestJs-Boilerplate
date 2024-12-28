import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchUpdateWithoutTableInput } from './branch-update-without-table.input';
import { Type } from 'class-transformer';
import { BranchCreateWithoutTableInput } from './branch-create-without-table.input';
import { BranchWhereInput } from './branch-where.input';

@InputType()
export class BranchUpsertWithoutTableInput {

    @Field(() => BranchUpdateWithoutTableInput, {nullable:false})
    @Type(() => BranchUpdateWithoutTableInput)
    update!: BranchUpdateWithoutTableInput;

    @Field(() => BranchCreateWithoutTableInput, {nullable:false})
    @Type(() => BranchCreateWithoutTableInput)
    create!: BranchCreateWithoutTableInput;

    @Field(() => BranchWhereInput, {nullable:true})
    @Type(() => BranchWhereInput)
    where?: BranchWhereInput;
}
