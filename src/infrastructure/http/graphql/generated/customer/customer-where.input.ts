import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserWhereInput } from '../user/user-where.input';
import { BranchListRelationFilter } from '../branch/branch-list-relation-filter.input';

@InputType()
export class CustomerWhereInput {

    @Field(() => [CustomerWhereInput], {nullable:true})
    AND?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    OR?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    NOT?: Array<CustomerWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    cnpj?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    company_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fantasy_name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => UserWhereInput, {nullable:true})
    User?: UserWhereInput;

    @Field(() => BranchListRelationFilter, {nullable:true})
    Branches?: BranchListRelationFilter;
}
