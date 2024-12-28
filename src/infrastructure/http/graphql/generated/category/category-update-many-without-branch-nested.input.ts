import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutBranchInput } from './category-create-without-branch.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutBranchInput } from './category-create-or-connect-without-branch.input';
import { CategoryUpsertWithWhereUniqueWithoutBranchInput } from './category-upsert-with-where-unique-without-branch.input';
import { CategoryCreateManyBranchInputEnvelope } from './category-create-many-branch-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithWhereUniqueWithoutBranchInput } from './category-update-with-where-unique-without-branch.input';
import { CategoryUpdateManyWithWhereWithoutBranchInput } from './category-update-many-with-where-without-branch.input';
import { CategoryScalarWhereInput } from './category-scalar-where.input';

@InputType()
export class CategoryUpdateManyWithoutBranchNestedInput {

    @Field(() => [CategoryCreateWithoutBranchInput], {nullable:true})
    @Type(() => CategoryCreateWithoutBranchInput)
    create?: Array<CategoryCreateWithoutBranchInput>;

    @Field(() => [CategoryCreateOrConnectWithoutBranchInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutBranchInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutBranchInput>;

    @Field(() => [CategoryUpsertWithWhereUniqueWithoutBranchInput], {nullable:true})
    @Type(() => CategoryUpsertWithWhereUniqueWithoutBranchInput)
    upsert?: Array<CategoryUpsertWithWhereUniqueWithoutBranchInput>;

    @Field(() => CategoryCreateManyBranchInputEnvelope, {nullable:true})
    @Type(() => CategoryCreateManyBranchInputEnvelope)
    createMany?: CategoryCreateManyBranchInputEnvelope;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryUpdateWithWhereUniqueWithoutBranchInput], {nullable:true})
    @Type(() => CategoryUpdateWithWhereUniqueWithoutBranchInput)
    update?: Array<CategoryUpdateWithWhereUniqueWithoutBranchInput>;

    @Field(() => [CategoryUpdateManyWithWhereWithoutBranchInput], {nullable:true})
    @Type(() => CategoryUpdateManyWithWhereWithoutBranchInput)
    updateMany?: Array<CategoryUpdateManyWithWhereWithoutBranchInput>;

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    @Type(() => CategoryScalarWhereInput)
    deleteMany?: Array<CategoryScalarWhereInput>;
}
