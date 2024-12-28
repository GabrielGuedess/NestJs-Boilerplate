import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchCreateNestedOneWithoutCategoryInput } from '../branch/branch-create-nested-one-without-category.input';
import { ProductCreateNestedManyWithoutCategoryInput } from '../product/product-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => BranchCreateNestedOneWithoutCategoryInput, {nullable:false})
    Branch!: BranchCreateNestedOneWithoutCategoryInput;

    @Field(() => ProductCreateNestedManyWithoutCategoryInput, {nullable:true})
    Products?: ProductCreateNestedManyWithoutCategoryInput;
}
