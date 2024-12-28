import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TabWhereUniqueInput } from './tab-where-unique.input';
import { Type } from 'class-transformer';
import { TabCreateWithoutOrdersInput } from './tab-create-without-orders.input';

@InputType()
export class TabCreateOrConnectWithoutOrdersInput {

    @Field(() => TabWhereUniqueInput, {nullable:false})
    @Type(() => TabWhereUniqueInput)
    where!: Prisma.AtLeast<TabWhereUniqueInput, 'id'>;

    @Field(() => TabCreateWithoutOrdersInput, {nullable:false})
    @Type(() => TabCreateWithoutOrdersInput)
    create!: TabCreateWithoutOrdersInput;
}
