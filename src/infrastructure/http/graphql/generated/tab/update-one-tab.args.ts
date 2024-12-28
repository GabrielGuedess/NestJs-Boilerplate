import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TabUpdateInput } from './tab-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TabWhereUniqueInput } from './tab-where-unique.input';

@ArgsType()
export class UpdateOneTabArgs {

    @Field(() => TabUpdateInput, {nullable:false})
    @Type(() => TabUpdateInput)
    data!: TabUpdateInput;

    @Field(() => TabWhereUniqueInput, {nullable:false})
    @Type(() => TabWhereUniqueInput)
    where!: Prisma.AtLeast<TabWhereUniqueInput, 'id'>;
}
