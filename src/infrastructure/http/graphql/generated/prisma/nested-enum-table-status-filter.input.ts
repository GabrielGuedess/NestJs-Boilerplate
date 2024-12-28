import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableStatus } from './table-status.enum';

@InputType()
export class NestedEnumTableStatusFilter {

    @Field(() => TableStatus, {nullable:true})
    equals?: keyof typeof TableStatus;

    @Field(() => [TableStatus], {nullable:true})
    in?: Array<keyof typeof TableStatus>;

    @Field(() => [TableStatus], {nullable:true})
    notIn?: Array<keyof typeof TableStatus>;

    @Field(() => NestedEnumTableStatusFilter, {nullable:true})
    not?: NestedEnumTableStatusFilter;
}
