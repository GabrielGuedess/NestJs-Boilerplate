import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductImageWhereInput } from './product-image-where.input';

@InputType()
export class ProductImageListRelationFilter {

    @Field(() => ProductImageWhereInput, {nullable:true})
    every?: ProductImageWhereInput;

    @Field(() => ProductImageWhereInput, {nullable:true})
    some?: ProductImageWhereInput;

    @Field(() => ProductImageWhereInput, {nullable:true})
    none?: ProductImageWhereInput;
}
