import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { EnumOrderStatusFilter } from '../prisma/enum-order-status-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumPaymentStatusFilter } from '../prisma/enum-payment-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OrderScalarWhereInput {

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    AND?: Array<OrderScalarWhereInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    OR?: Array<OrderScalarWhereInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    NOT?: Array<OrderScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => EnumOrderStatusFilter, {nullable:true})
    status?: EnumOrderStatusFilter;

    @Field(() => IntFilter, {nullable:true})
    total_price?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    observations?: StringNullableFilter;

    @Field(() => EnumPaymentStatusFilter, {nullable:true})
    payment_status?: EnumPaymentStatusFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    payment_date?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    finished_at?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UuidFilter, {nullable:true})
    tab_id?: UuidFilter;
}
