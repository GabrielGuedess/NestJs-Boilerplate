import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchWhereInput } from './branch-where.input';
import { Type } from 'class-transformer';
import { BranchUpdateWithoutCategoryInput } from './branch-update-without-category.input';

@InputType()
export class BranchUpdateToOneWithWhereWithoutCategoryInput {

    @Field(() => BranchWhereInput, {nullable:true})
    @Type(() => BranchWhereInput)
    where?: BranchWhereInput;

    @Field(() => BranchUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => BranchUpdateWithoutCategoryInput)
    data!: BranchUpdateWithoutCategoryInput;
}
