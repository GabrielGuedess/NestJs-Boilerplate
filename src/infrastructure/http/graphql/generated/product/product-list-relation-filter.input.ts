import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductListRelationFilter {

    @Field(() => ProductWhereInput, {nullable:true})
    every?: ProductWhereInput;

    @Field(() => ProductWhereInput, {nullable:true})
    some?: ProductWhereInput;

    @Field(() => ProductWhereInput, {nullable:true})
    none?: ProductWhereInput;
}
