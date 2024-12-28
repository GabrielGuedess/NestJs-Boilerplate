import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from './role.enum';
import { NestedEnumRoleFilter } from './nested-enum-role-filter.input';

@InputType()
export class EnumRoleFilter {

    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;

    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;

    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;

    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: NestedEnumRoleFilter;
}
