import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserWhereInput } from '../user/user-where.input';
import { BranchWhereInput } from '../branch/branch-where.input';
import { TableListRelationFilter } from '../table/table-list-relation-filter.input';

@InputType()
export class EmployeeWhereInput {

    @Field(() => [EmployeeWhereInput], {nullable:true})
    AND?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    OR?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    NOT?: Array<EmployeeWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    role?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    branch_id?: UuidFilter;

    @Field(() => UserWhereInput, {nullable:true})
    User?: UserWhereInput;

    @Field(() => BranchWhereInput, {nullable:true})
    Branch?: BranchWhereInput;

    @Field(() => TableListRelationFilter, {nullable:true})
    Tables?: TableListRelationFilter;
}
