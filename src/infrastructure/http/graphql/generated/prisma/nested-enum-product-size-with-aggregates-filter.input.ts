import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductSize } from './product-size.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumProductSizeFilter } from './nested-enum-product-size-filter.input';

@InputType()
export class NestedEnumProductSizeWithAggregatesFilter {

    @Field(() => ProductSize, {nullable:true})
    equals?: keyof typeof ProductSize;

    @Field(() => [ProductSize], {nullable:true})
    in?: Array<keyof typeof ProductSize>;

    @Field(() => [ProductSize], {nullable:true})
    notIn?: Array<keyof typeof ProductSize>;

    @Field(() => NestedEnumProductSizeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumProductSizeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumProductSizeFilter, {nullable:true})
    _min?: NestedEnumProductSizeFilter;

    @Field(() => NestedEnumProductSizeFilter, {nullable:true})
    _max?: NestedEnumProductSizeFilter;
}
