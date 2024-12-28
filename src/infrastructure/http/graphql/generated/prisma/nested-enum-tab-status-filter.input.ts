import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabStatus } from './tab-status.enum';

@InputType()
export class NestedEnumTabStatusFilter {

    @Field(() => TabStatus, {nullable:true})
    equals?: keyof typeof TabStatus;

    @Field(() => [TabStatus], {nullable:true})
    in?: Array<keyof typeof TabStatus>;

    @Field(() => [TabStatus], {nullable:true})
    notIn?: Array<keyof typeof TabStatus>;

    @Field(() => NestedEnumTabStatusFilter, {nullable:true})
    not?: NestedEnumTabStatusFilter;
}
