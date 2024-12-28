import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabStatus } from './tab-status.enum';
import { NestedEnumTabStatusWithAggregatesFilter } from './nested-enum-tab-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTabStatusFilter } from './nested-enum-tab-status-filter.input';

@InputType()
export class EnumTabStatusWithAggregatesFilter {

    @Field(() => TabStatus, {nullable:true})
    equals?: keyof typeof TabStatus;

    @Field(() => [TabStatus], {nullable:true})
    in?: Array<keyof typeof TabStatus>;

    @Field(() => [TabStatus], {nullable:true})
    notIn?: Array<keyof typeof TabStatus>;

    @Field(() => NestedEnumTabStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTabStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTabStatusFilter, {nullable:true})
    _min?: NestedEnumTabStatusFilter;

    @Field(() => NestedEnumTabStatusFilter, {nullable:true})
    _max?: NestedEnumTabStatusFilter;
}
