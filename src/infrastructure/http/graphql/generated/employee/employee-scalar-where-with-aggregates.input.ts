import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class EmployeeScalarWhereWithAggregatesInput {

    @Field(() => [EmployeeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EmployeeScalarWhereWithAggregatesInput>;

    @Field(() => [EmployeeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EmployeeScalarWhereWithAggregatesInput>;

    @Field(() => [EmployeeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EmployeeScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    role?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    user_id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    branch_id?: UuidWithAggregatesFilter;
}
