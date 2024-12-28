import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchCreateWithoutCategoryInput } from './branch-create-without-category.input';
import { Type } from 'class-transformer';
import { BranchCreateOrConnectWithoutCategoryInput } from './branch-create-or-connect-without-category.input';
import { BranchUpsertWithoutCategoryInput } from './branch-upsert-without-category.input';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';
import { BranchUpdateToOneWithWhereWithoutCategoryInput } from './branch-update-to-one-with-where-without-category.input';

@InputType()
export class BranchUpdateOneRequiredWithoutCategoryNestedInput {

    @Field(() => BranchCreateWithoutCategoryInput, {nullable:true})
    @Type(() => BranchCreateWithoutCategoryInput)
    create?: BranchCreateWithoutCategoryInput;

    @Field(() => BranchCreateOrConnectWithoutCategoryInput, {nullable:true})
    @Type(() => BranchCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: BranchCreateOrConnectWithoutCategoryInput;

    @Field(() => BranchUpsertWithoutCategoryInput, {nullable:true})
    @Type(() => BranchUpsertWithoutCategoryInput)
    upsert?: BranchUpsertWithoutCategoryInput;

    @Field(() => BranchWhereUniqueInput, {nullable:true})
    @Type(() => BranchWhereUniqueInput)
    connect?: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => BranchUpdateToOneWithWhereWithoutCategoryInput, {nullable:true})
    @Type(() => BranchUpdateToOneWithWhereWithoutCategoryInput)
    update?: BranchUpdateToOneWithWhereWithoutCategoryInput;
}
