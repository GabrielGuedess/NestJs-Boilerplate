import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableStatus } from './table-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTableStatusFilter } from './nested-enum-table-status-filter.input';

@InputType()
export class NestedEnumTableStatusWithAggregatesFilter {

    @Field(() => TableStatus, {nullable:true})
    equals?: keyof typeof TableStatus;

    @Field(() => [TableStatus], {nullable:true})
    in?: Array<keyof typeof TableStatus>;

    @Field(() => [TableStatus], {nullable:true})
    notIn?: Array<keyof typeof TableStatus>;

    @Field(() => NestedEnumTableStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTableStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTableStatusFilter, {nullable:true})
    _min?: NestedEnumTableStatusFilter;

    @Field(() => NestedEnumTableStatusFilter, {nullable:true})
    _max?: NestedEnumTableStatusFilter;
}
