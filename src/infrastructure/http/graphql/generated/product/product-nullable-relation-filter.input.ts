import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductNullableRelationFilter {

    @Field(() => ProductWhereInput, {nullable:true})
    is?: ProductWhereInput;

    @Field(() => ProductWhereInput, {nullable:true})
    isNot?: ProductWhereInput;
}
