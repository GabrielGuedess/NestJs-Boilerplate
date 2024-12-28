import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutBranchInput } from './category-create-without-branch.input';

@InputType()
export class CategoryCreateOrConnectWithoutBranchInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryCreateWithoutBranchInput, {nullable:false})
    @Type(() => CategoryCreateWithoutBranchInput)
    create!: CategoryCreateWithoutBranchInput;
}
