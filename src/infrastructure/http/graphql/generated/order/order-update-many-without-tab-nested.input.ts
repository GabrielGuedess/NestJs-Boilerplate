import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutTabInput } from './order-create-without-tab.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutTabInput } from './order-create-or-connect-without-tab.input';
import { OrderUpsertWithWhereUniqueWithoutTabInput } from './order-upsert-with-where-unique-without-tab.input';
import { OrderCreateManyTabInputEnvelope } from './order-create-many-tab-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutTabInput } from './order-update-with-where-unique-without-tab.input';
import { OrderUpdateManyWithWhereWithoutTabInput } from './order-update-many-with-where-without-tab.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUpdateManyWithoutTabNestedInput {

    @Field(() => [OrderCreateWithoutTabInput], {nullable:true})
    @Type(() => OrderCreateWithoutTabInput)
    create?: Array<OrderCreateWithoutTabInput>;

    @Field(() => [OrderCreateOrConnectWithoutTabInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutTabInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutTabInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutTabInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutTabInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutTabInput>;

    @Field(() => OrderCreateManyTabInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyTabInputEnvelope)
    createMany?: OrderCreateManyTabInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;

    @Field(() => [OrderUpdateWithWhereUniqueWithoutTabInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutTabInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutTabInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutTabInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutTabInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutTabInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}
