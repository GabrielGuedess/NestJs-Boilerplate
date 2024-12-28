import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutTabInput } from './order-create-without-tab.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutTabInput } from './order-create-or-connect-without-tab.input';
import { OrderCreateManyTabInputEnvelope } from './order-create-many-tab-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedManyWithoutTabInput {

    @Field(() => [OrderCreateWithoutTabInput], {nullable:true})
    @Type(() => OrderCreateWithoutTabInput)
    create?: Array<OrderCreateWithoutTabInput>;

    @Field(() => [OrderCreateOrConnectWithoutTabInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutTabInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutTabInput>;

    @Field(() => OrderCreateManyTabInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyTabInputEnvelope)
    createMany?: OrderCreateManyTabInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
}
