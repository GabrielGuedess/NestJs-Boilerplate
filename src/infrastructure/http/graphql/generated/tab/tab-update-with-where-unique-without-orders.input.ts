import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TabWhereUniqueInput } from './tab-where-unique.input';
import { Type } from 'class-transformer';
import { TabUpdateWithoutOrdersInput } from './tab-update-without-orders.input';

@InputType()
export class TabUpdateWithWhereUniqueWithoutOrdersInput {

    @Field(() => TabWhereUniqueInput, {nullable:false})
    @Type(() => TabWhereUniqueInput)
    where!: Prisma.AtLeast<TabWhereUniqueInput, 'id'>;

    @Field(() => TabUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => TabUpdateWithoutOrdersInput)
    data!: TabUpdateWithoutOrdersInput;
}
