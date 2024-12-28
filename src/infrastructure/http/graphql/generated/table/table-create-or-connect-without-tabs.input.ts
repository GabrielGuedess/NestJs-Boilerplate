import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { Type } from 'class-transformer';
import { TableCreateWithoutTabsInput } from './table-create-without-tabs.input';

@InputType()
export class TableCreateOrConnectWithoutTabsInput {

    @Field(() => TableWhereUniqueInput, {nullable:false})
    @Type(() => TableWhereUniqueInput)
    where!: Prisma.AtLeast<TableWhereUniqueInput, 'id'>;

    @Field(() => TableCreateWithoutTabsInput, {nullable:false})
    @Type(() => TableCreateWithoutTabsInput)
    create!: TableCreateWithoutTabsInput;
}
