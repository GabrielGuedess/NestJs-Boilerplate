import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutProductsInput } from './category-update-without-products.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutProductsInput } from './category-create-without-products.input';
import { CategoryWhereInput } from './category-where.input';

@InputType()
export class CategoryUpsertWithoutProductsInput {

    @Field(() => CategoryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutProductsInput)
    update!: CategoryUpdateWithoutProductsInput;

    @Field(() => CategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutProductsInput)
    create!: CategoryCreateWithoutProductsInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;
}
