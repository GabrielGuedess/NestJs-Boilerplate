import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabWhereInput } from './tab-where.input';
import { EnumTabStatusFilter } from '../prisma/enum-tab-status-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { TableRelationFilter } from '../table/table-relation-filter.input';
import { OrderListRelationFilter } from '../order/order-list-relation-filter.input';

@InputType()
export class TabWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [TabWhereInput], {nullable:true})
    AND?: Array<TabWhereInput>;

    @Field(() => [TabWhereInput], {nullable:true})
    OR?: Array<TabWhereInput>;

    @Field(() => [TabWhereInput], {nullable:true})
    NOT?: Array<TabWhereInput>;

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

    @Field(() => TableRelationFilter, {nullable:true})
    Table?: TableRelationFilter;

    @Field(() => OrderListRelationFilter, {nullable:true})
    Orders?: OrderListRelationFilter;
}
