import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { EnumOrderStatusWithAggregatesFilter } from '../prisma/enum-order-status-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumPaymentStatusWithAggregatesFilter } from '../prisma/enum-payment-status-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OrderScalarWhereWithAggregatesInput {

    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrderScalarWhereWithAggregatesInput>;

    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrderScalarWhereWithAggregatesInput>;

    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrderScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => EnumOrderStatusWithAggregatesFilter, {nullable:true})
    status?: EnumOrderStatusWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    total_price?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    observations?: StringNullableWithAggregatesFilter;

    @Field(() => EnumPaymentStatusWithAggregatesFilter, {nullable:true})
    payment_status?: EnumPaymentStatusWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    payment_date?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    finished_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    tab_id?: UuidWithAggregatesFilter;
}
