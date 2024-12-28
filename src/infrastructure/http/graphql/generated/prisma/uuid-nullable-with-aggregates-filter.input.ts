import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QueryMode } from './query-mode.enum';
import { NestedUuidNullableWithAggregatesFilter } from './nested-uuid-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedStringNullableFilter } from './nested-string-nullable-filter.input';

@InputType()
export class UuidNullableWithAggregatesFilter {

    @Field(() => String, {nullable:true})
    equals?: string;

    @Field(() => [String], {nullable:true})
    in?: Array<string>;

    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;

    @Field(() => String, {nullable:true})
    lt?: string;

    @Field(() => String, {nullable:true})
    lte?: string;

    @Field(() => String, {nullable:true})
    gt?: string;

    @Field(() => String, {nullable:true})
    gte?: string;

    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;

    @Field(() => NestedUuidNullableWithAggregatesFilter, {nullable:true})
    not?: NestedUuidNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: NestedStringNullableFilter;

    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: NestedStringNullableFilter;
}
