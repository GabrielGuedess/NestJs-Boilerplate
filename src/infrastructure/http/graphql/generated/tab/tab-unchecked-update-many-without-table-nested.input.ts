import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabCreateWithoutTableInput } from './tab-create-without-table.input';
import { Type } from 'class-transformer';
import { TabCreateOrConnectWithoutTableInput } from './tab-create-or-connect-without-table.input';
import { TabUpsertWithWhereUniqueWithoutTableInput } from './tab-upsert-with-where-unique-without-table.input';
import { TabCreateManyTableInputEnvelope } from './tab-create-many-table-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TabWhereUniqueInput } from './tab-where-unique.input';
import { TabUpdateWithWhereUniqueWithoutTableInput } from './tab-update-with-where-unique-without-table.input';
import { TabUpdateManyWithWhereWithoutTableInput } from './tab-update-many-with-where-without-table.input';
import { TabScalarWhereInput } from './tab-scalar-where.input';

@InputType()
export class TabUncheckedUpdateManyWithoutTableNestedInput {

    @Field(() => [TabCreateWithoutTableInput], {nullable:true})
    @Type(() => TabCreateWithoutTableInput)
    create?: Array<TabCreateWithoutTableInput>;

    @Field(() => [TabCreateOrConnectWithoutTableInput], {nullable:true})
    @Type(() => TabCreateOrConnectWithoutTableInput)
    connectOrCreate?: Array<TabCreateOrConnectWithoutTableInput>;

    @Field(() => [TabUpsertWithWhereUniqueWithoutTableInput], {nullable:true})
    @Type(() => TabUpsertWithWhereUniqueWithoutTableInput)
    upsert?: Array<TabUpsertWithWhereUniqueWithoutTableInput>;

    @Field(() => TabCreateManyTableInputEnvelope, {nullable:true})
    @Type(() => TabCreateManyTableInputEnvelope)
    createMany?: TabCreateManyTableInputEnvelope;

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

    @Field(() => [TabUpdateWithWhereUniqueWithoutTableInput], {nullable:true})
    @Type(() => TabUpdateWithWhereUniqueWithoutTableInput)
    update?: Array<TabUpdateWithWhereUniqueWithoutTableInput>;

    @Field(() => [TabUpdateManyWithWhereWithoutTableInput], {nullable:true})
    @Type(() => TabUpdateManyWithWhereWithoutTableInput)
    updateMany?: Array<TabUpdateManyWithWhereWithoutTableInput>;

    @Field(() => [TabScalarWhereInput], {nullable:true})
    @Type(() => TabScalarWhereInput)
    deleteMany?: Array<TabScalarWhereInput>;
}
