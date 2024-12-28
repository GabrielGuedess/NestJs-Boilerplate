import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TabWhereUniqueInput } from './tab-where-unique.input';
import { Type } from 'class-transformer';
import { TabUpdateWithoutTableInput } from './tab-update-without-table.input';

@InputType()
export class TabUpdateWithWhereUniqueWithoutTableInput {

    @Field(() => TabWhereUniqueInput, {nullable:false})
    @Type(() => TabWhereUniqueInput)
    where!: Prisma.AtLeast<TabWhereUniqueInput, 'id'>;

    @Field(() => TabUpdateWithoutTableInput, {nullable:false})
    @Type(() => TabUpdateWithoutTableInput)
    data!: TabUpdateWithoutTableInput;
}
