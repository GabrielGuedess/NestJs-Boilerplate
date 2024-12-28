import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereInput } from './employee-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { BranchRelationFilter } from '../branch/branch-relation-filter.input';
import { TableListRelationFilter } from '../table/table-list-relation-filter.input';

@InputType()
export class EmployeeWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    AND?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    OR?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    NOT?: Array<EmployeeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    role?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UuidFilter, {nullable:true})
    branch_id?: UuidFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => BranchRelationFilter, {nullable:true})
    Branch?: BranchRelationFilter;

    @Field(() => TableListRelationFilter, {nullable:true})
    Tables?: TableListRelationFilter;
}
