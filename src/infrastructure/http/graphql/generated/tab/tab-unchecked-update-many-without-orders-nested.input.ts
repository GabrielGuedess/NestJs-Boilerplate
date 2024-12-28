import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabCreateWithoutOrdersInput } from './tab-create-without-orders.input';
import { Type } from 'class-transformer';
import { TabCreateOrConnectWithoutOrdersInput } from './tab-create-or-connect-without-orders.input';
import { TabUpsertWithWhereUniqueWithoutOrdersInput } from './tab-upsert-with-where-unique-without-orders.input';
import { Prisma } from '@prisma/client';
import { TabWhereUniqueInput } from './tab-where-unique.input';
import { TabUpdateWithWhereUniqueWithoutOrdersInput } from './tab-update-with-where-unique-without-orders.input';
import { TabUpdateManyWithWhereWithoutOrdersInput } from './tab-update-many-with-where-without-orders.input';
import { TabScalarWhereInput } from './tab-scalar-where.input';

@InputType()
export class TabUncheckedUpdateManyWithoutOrdersNestedInput {

    @Field(() => [TabCreateWithoutOrdersInput], {nullable:true})
    @Type(() => TabCreateWithoutOrdersInput)
    create?: Array<TabCreateWithoutOrdersInput>;

    @Field(() => [TabCreateOrConnectWithoutOrdersInput], {nullable:true})
    @Type(() => TabCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: Array<TabCreateOrConnectWithoutOrdersInput>;

    @Field(() => [TabUpsertWithWhereUniqueWithoutOrdersInput], {nullable:true})
    @Type(() => TabUpsertWithWhereUniqueWithoutOrdersInput)
    upsert?: Array<TabUpsertWithWhereUniqueWithoutOrdersInput>;

    @Field(() => [TabWhereUniqueInput], {nullable:true})
    @Type(() => TabWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TabWhereUniqueInput, 'id'>>;

    @Field(() => [TabWhereUniqueInput], {nullable:true})
    @Type(() => TabWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TabWhereUniqueInput, 'id'>>;

    @Field(() => [TabWhereUniqueInput], {nullable:true})
    @Type(() => TabWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TabWhereUniqueInput, 'id'>>;

    @Field(() => [TabWhereUniqueInput], {nullable:true})
    @Type(() => TabWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TabWhereUniqueInput, 'id'>>;

    @Field(() => [TabUpdateWithWhereUniqueWithoutOrdersInput], {nullable:true})
    @Type(() => TabUpdateWithWhereUniqueWithoutOrdersInput)
    update?: Array<TabUpdateWithWhereUniqueWithoutOrdersInput>;

    @Field(() => [TabUpdateManyWithWhereWithoutOrdersInput], {nullable:true})
    @Type(() => TabUpdateManyWithWhereWithoutOrdersInput)
    updateMany?: Array<TabUpdateManyWithWhereWithoutOrdersInput>;

    @Field(() => [TabScalarWhereInput], {nullable:true})
    @Type(() => TabScalarWhereInput)
    deleteMany?: Array<TabScalarWhereInput>;
}
