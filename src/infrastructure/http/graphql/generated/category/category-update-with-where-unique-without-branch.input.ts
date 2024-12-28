import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutBranchInput } from './category-update-without-branch.input';

@InputType()
export class CategoryUpdateWithWhereUniqueWithoutBranchInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryUpdateWithoutBranchInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutBranchInput)
    data!: CategoryUpdateWithoutBranchInput;
}
