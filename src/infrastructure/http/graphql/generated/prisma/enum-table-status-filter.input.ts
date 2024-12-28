import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableStatus } from './table-status.enum';
import { NestedEnumTableStatusFilter } from './nested-enum-table-status-filter.input';

@InputType()
export class EnumTableStatusFilter {

    @Field(() => TableStatus, {nullable:true})
    equals?: keyof typeof TableStatus;

    @Field(() => [TableStatus], {nullable:true})
    in?: Array<keyof typeof TableStatus>;

    @Field(() => [TableStatus], {nullable:true})
    notIn?: Array<keyof typeof TableStatus>;

    @Field(() => NestedEnumTableStatusFilter, {nullable:true})
    not?: NestedEnumTableStatusFilter;
}
