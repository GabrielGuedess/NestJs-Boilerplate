import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TabWhereUniqueInput } from './tab-where-unique.input';
import { Type } from 'class-transformer';
import { TabCreateInput } from './tab-create.input';
import { TabUpdateInput } from './tab-update.input';

@ArgsType()
export class UpsertOneTabArgs {

    @Field(() => TabWhereUniqueInput, {nullable:false})
    @Type(() => TabWhereUniqueInput)
    where!: Prisma.AtLeast<TabWhereUniqueInput, 'id'>;

    @Field(() => TabCreateInput, {nullable:false})
    @Type(() => TabCreateInput)
    create!: TabCreateInput;

    @Field(() => TabUpdateInput, {nullable:false})
    @Type(() => TabUpdateInput)
    update!: TabUpdateInput;
}
