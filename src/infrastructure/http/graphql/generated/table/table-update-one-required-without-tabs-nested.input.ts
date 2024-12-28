import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableCreateWithoutTabsInput } from './table-create-without-tabs.input';
import { Type } from 'class-transformer';
import { TableCreateOrConnectWithoutTabsInput } from './table-create-or-connect-without-tabs.input';
import { TableUpsertWithoutTabsInput } from './table-upsert-without-tabs.input';
import { Prisma } from '@prisma/client';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { TableUpdateToOneWithWhereWithoutTabsInput } from './table-update-to-one-with-where-without-tabs.input';

@InputType()
export class TableUpdateOneRequiredWithoutTabsNestedInput {

    @Field(() => TableCreateWithoutTabsInput, {nullable:true})
    @Type(() => TableCreateWithoutTabsInput)
    create?: TableCreateWithoutTabsInput;

    @Field(() => TableCreateOrConnectWithoutTabsInput, {nullable:true})
    @Type(() => TableCreateOrConnectWithoutTabsInput)
    connectOrCreate?: TableCreateOrConnectWithoutTabsInput;

    @Field(() => TableUpsertWithoutTabsInput, {nullable:true})
    @Type(() => TableUpsertWithoutTabsInput)
    upsert?: TableUpsertWithoutTabsInput;

    @Field(() => TableWhereUniqueInput, {nullable:true})
    @Type(() => TableWhereUniqueInput)
    connect?: Prisma.AtLeast<TableWhereUniqueInput, 'id'>;

    @Field(() => TableUpdateToOneWithWhereWithoutTabsInput, {nullable:true})
    @Type(() => TableUpdateToOneWithWhereWithoutTabsInput)
    update?: TableUpdateToOneWithWhereWithoutTabsInput;
}
