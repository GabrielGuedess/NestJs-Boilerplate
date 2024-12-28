import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabStatus } from './tab-status.enum';
import { NestedEnumTabStatusFilter } from './nested-enum-tab-status-filter.input';

@InputType()
export class EnumTabStatusFilter {

    @Field(() => TabStatus, {nullable:true})
    equals?: keyof typeof TabStatus;

    @Field(() => [TabStatus], {nullable:true})
    in?: Array<keyof typeof TabStatus>;

    @Field(() => [TabStatus], {nullable:true})
    notIn?: Array<keyof typeof TabStatus>;

    @Field(() => NestedEnumTabStatusFilter, {nullable:true})
    not?: NestedEnumTabStatusFilter;
}
