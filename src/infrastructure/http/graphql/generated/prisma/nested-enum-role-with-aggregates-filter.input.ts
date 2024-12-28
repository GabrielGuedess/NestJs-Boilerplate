import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from './role.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRoleFilter } from './nested-enum-role-filter.input';

@InputType()
export class NestedEnumRoleWithAggregatesFilter {

    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;

    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;

    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;

    @Field(() => NestedEnumRoleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRoleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _min?: NestedEnumRoleFilter;

    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _max?: NestedEnumRoleFilter;
}
