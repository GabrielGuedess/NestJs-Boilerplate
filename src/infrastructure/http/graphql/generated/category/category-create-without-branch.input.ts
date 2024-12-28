import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutCategoryInput } from '../product/product-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateWithoutBranchInput {

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

    @Field(() => ProductCreateNestedManyWithoutCategoryInput, {nullable:true})
    Products?: ProductCreateNestedManyWithoutCategoryInput;
}
