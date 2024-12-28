import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabCreateWithoutOrdersInput } from './tab-create-without-orders.input';
import { Type } from 'class-transformer';
import { TabCreateOrConnectWithoutOrdersInput } from './tab-create-or-connect-without-orders.input';
import { TabUpsertWithoutOrdersInput } from './tab-upsert-without-orders.input';
import { Prisma } from '@prisma/client';
import { TabWhereUniqueInput } from './tab-where-unique.input';
import { TabUpdateToOneWithWhereWithoutOrdersInput } from './tab-update-to-one-with-where-without-orders.input';

@InputType()
export class TabUpdateOneRequiredWithoutOrdersNestedInput {

    @Field(() => TabCreateWithoutOrdersInput, {nullable:true})
    @Type(() => TabCreateWithoutOrdersInput)
    create?: TabCreateWithoutOrdersInput;

    @Field(() => TabCreateOrConnectWithoutOrdersInput, {nullable:true})
    @Type(() => TabCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: TabCreateOrConnectWithoutOrdersInput;

    @Field(() => TabUpsertWithoutOrdersInput, {nullable:true})
    @Type(() => TabUpsertWithoutOrdersInput)
    upsert?: TabUpsertWithoutOrdersInput;

    @Field(() => TabWhereUniqueInput, {nullable:true})
    @Type(() => TabWhereUniqueInput)
    connect?: Prisma.AtLeast<TabWhereUniqueInput, 'id'>;

    @Field(() => TabUpdateToOneWithWhereWithoutOrdersInput, {nullable:true})
    @Type(() => TabUpdateToOneWithWhereWithoutOrdersInput)
    update?: TabUpdateToOneWithWhereWithoutOrdersInput;
}
