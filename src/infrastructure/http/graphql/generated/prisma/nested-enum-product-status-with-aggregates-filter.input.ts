import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductStatus } from './product-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumProductStatusFilter } from './nested-enum-product-status-filter.input';

@InputType()
export class NestedEnumProductStatusWithAggregatesFilter {

    @Field(() => ProductStatus, {nullable:true})
    equals?: keyof typeof ProductStatus;

    @Field(() => [ProductStatus], {nullable:true})
    in?: Array<keyof typeof ProductStatus>;

    @Field(() => [ProductStatus], {nullable:true})
    notIn?: Array<keyof typeof ProductStatus>;

    @Field(() => NestedEnumProductStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumProductStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumProductStatusFilter, {nullable:true})
    _min?: NestedEnumProductStatusFilter;

    @Field(() => NestedEnumProductStatusFilter, {nullable:true})
    _max?: NestedEnumProductStatusFilter;
}
