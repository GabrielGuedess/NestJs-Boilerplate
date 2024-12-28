import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductSize } from './product-size.enum';

@InputType()
export class NestedEnumProductSizeFilter {

    @Field(() => ProductSize, {nullable:true})
    equals?: keyof typeof ProductSize;

    @Field(() => [ProductSize], {nullable:true})
    in?: Array<keyof typeof ProductSize>;

    @Field(() => [ProductSize], {nullable:true})
    notIn?: Array<keyof typeof ProductSize>;

    @Field(() => NestedEnumProductSizeFilter, {nullable:true})
    not?: NestedEnumProductSizeFilter;
}
