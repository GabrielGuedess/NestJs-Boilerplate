import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutProductsInput } from './category-update-without-products.input';

@InputType()
export class CategoryUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;

    @Field(() => CategoryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutProductsInput)
    data!: CategoryUpdateWithoutProductsInput;
}
