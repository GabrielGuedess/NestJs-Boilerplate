import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableUpdateInput } from './table-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TableWhereUniqueInput } from './table-where-unique.input';

@ArgsType()
export class UpdateOneTableArgs {

    @Field(() => TableUpdateInput, {nullable:false})
    @Type(() => TableUpdateInput)
    data!: TableUpdateInput;

    @Field(() => TableWhereUniqueInput, {nullable:false})
    @Type(() => TableWhereUniqueInput)
    where!: Prisma.AtLeast<TableWhereUniqueInput, 'id'>;
}
