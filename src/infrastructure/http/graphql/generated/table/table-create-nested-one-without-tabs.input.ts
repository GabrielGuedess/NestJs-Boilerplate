import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableCreateWithoutTabsInput } from './table-create-without-tabs.input';
import { Type } from 'class-transformer';
import { TableCreateOrConnectWithoutTabsInput } from './table-create-or-connect-without-tabs.input';
import { Prisma } from '@prisma/client';
import { TableWhereUniqueInput } from './table-where-unique.input';

@InputType()
export class TableCreateNestedOneWithoutTabsInput {

    @Field(() => TableCreateWithoutTabsInput, {nullable:true})
    @Type(() => TableCreateWithoutTabsInput)
    create?: TableCreateWithoutTabsInput;

    @Field(() => TableCreateOrConnectWithoutTabsInput, {nullable:true})
    @Type(() => TableCreateOrConnectWithoutTabsInput)
    connectOrCreate?: TableCreateOrConnectWithoutTabsInput;

    @Field(() => TableWhereUniqueInput, {nullable:true})
    @Type(() => TableWhereUniqueInput)
    connect?: Prisma.AtLeast<TableWhereUniqueInput, 'id'>;
}
