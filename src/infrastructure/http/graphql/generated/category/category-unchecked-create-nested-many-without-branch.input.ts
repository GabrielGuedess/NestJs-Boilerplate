import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutBranchInput } from './category-create-without-branch.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutBranchInput } from './category-create-or-connect-without-branch.input';
import { CategoryCreateManyBranchInputEnvelope } from './category-create-many-branch-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryUncheckedCreateNestedManyWithoutBranchInput {

    @Field(() => [CategoryCreateWithoutBranchInput], {nullable:true})
    @Type(() => CategoryCreateWithoutBranchInput)
    create?: Array<CategoryCreateWithoutBranchInput>;

    @Field(() => [CategoryCreateOrConnectWithoutBranchInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutBranchInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutBranchInput>;

    @Field(() => CategoryCreateManyBranchInputEnvelope, {nullable:true})
    @Type(() => CategoryCreateManyBranchInputEnvelope)
    createMany?: CategoryCreateManyBranchInputEnvelope;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
}
