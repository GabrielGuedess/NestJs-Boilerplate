import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { BranchListRelationFilter } from '../branch/branch-list-relation-filter.input';

@InputType()
export class CustomerWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    cnpj?: string;

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => [CustomerWhereInput], {nullable:true})
    AND?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    OR?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    NOT?: Array<CustomerWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => BranchListRelationFilter, {nullable:true})
    Branches?: BranchListRelationFilter;
}
