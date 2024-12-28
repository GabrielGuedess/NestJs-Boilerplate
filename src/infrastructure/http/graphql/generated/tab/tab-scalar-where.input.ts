import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { EnumTabStatusFilter } from '../prisma/enum-tab-status-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TabScalarWhereInput {

    @Field(() => [TabScalarWhereInput], {nullable:true})
    AND?: Array<TabScalarWhereInput>;

    @Field(() => [TabScalarWhereInput], {nullable:true})
    OR?: Array<TabScalarWhereInput>;

    @Field(() => [TabScalarWhereInput], {nullable:true})
    NOT?: Array<TabScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => EnumTabStatusFilter, {nullable:true})
    status?: EnumTabStatusFilter;

    @Field(() => IntFilter, {nullable:true})
    value?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    payment_method?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    observations?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    employee_tax?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    discount?: IntNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UuidFilter, {nullable:true})
    table_id?: UuidFilter;
}
