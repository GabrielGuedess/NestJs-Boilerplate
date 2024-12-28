import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchUpdateWithoutCategoryInput } from './branch-update-without-category.input';
import { Type } from 'class-transformer';
import { BranchCreateWithoutCategoryInput } from './branch-create-without-category.input';
import { BranchWhereInput } from './branch-where.input';

@InputType()
export class BranchUpsertWithoutCategoryInput {

    @Field(() => BranchUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => BranchUpdateWithoutCategoryInput)
    update!: BranchUpdateWithoutCategoryInput;

    @Field(() => BranchCreateWithoutCategoryInput, {nullable:false})
    @Type(() => BranchCreateWithoutCategoryInput)
    create!: BranchCreateWithoutCategoryInput;

    @Field(() => BranchWhereInput, {nullable:true})
    @Type(() => BranchWhereInput)
    where?: BranchWhereInput;
}
