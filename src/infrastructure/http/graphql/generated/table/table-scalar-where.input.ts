import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumTableStatusFilter } from '../prisma/enum-table-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TableScalarWhereInput {

    @Field(() => [TableScalarWhereInput], {nullable:true})
    AND?: Array<TableScalarWhereInput>;

    @Field(() => [TableScalarWhereInput], {nullable:true})
    OR?: Array<TableScalarWhereInput>;

    @Field(() => [TableScalarWhereInput], {nullable:true})
    NOT?: Array<TableScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    capacity?: IntFilter;

    @Field(() => EnumTableStatusFilter, {nullable:true})
    status?: EnumTableStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    location?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    occupied_since?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UuidFilter, {nullable:true})
    branch_id?: UuidFilter;
}
