import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumTableStatusWithAggregatesFilter } from '../prisma/enum-table-status-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TableScalarWhereWithAggregatesInput {

    @Field(() => [TableScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TableScalarWhereWithAggregatesInput>;

    @Field(() => [TableScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TableScalarWhereWithAggregatesInput>;

    @Field(() => [TableScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TableScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    capacity?: IntWithAggregatesFilter;

    @Field(() => EnumTableStatusWithAggregatesFilter, {nullable:true})
    status?: EnumTableStatusWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    location?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    occupied_since?: DateTimeNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    branch_id?: UuidWithAggregatesFilter;
}
