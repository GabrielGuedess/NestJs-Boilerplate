import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductStatus } from './product-status.enum';
import { NestedEnumProductStatusFilter } from './nested-enum-product-status-filter.input';

@InputType()
export class EnumProductStatusFilter {

    @Field(() => ProductStatus, {nullable:true})
    equals?: keyof typeof ProductStatus;

    @Field(() => [ProductStatus], {nullable:true})
    in?: Array<keyof typeof ProductStatus>;

    @Field(() => [ProductStatus], {nullable:true})
    notIn?: Array<keyof typeof ProductStatus>;

    @Field(() => NestedEnumProductStatusFilter, {nullable:true})
    not?: NestedEnumProductStatusFilter;
}
