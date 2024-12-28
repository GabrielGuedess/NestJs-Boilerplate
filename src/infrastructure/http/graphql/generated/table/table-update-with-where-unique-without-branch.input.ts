import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { Type } from 'class-transformer';
import { TableUpdateWithoutBranchInput } from './table-update-without-branch.input';

@InputType()
export class TableUpdateWithWhereUniqueWithoutBranchInput {

    @Field(() => TableWhereUniqueInput, {nullable:false})
    @Type(() => TableWhereUniqueInput)
    where!: Prisma.AtLeast<TableWhereUniqueInput, 'id'>;

    @Field(() => TableUpdateWithoutBranchInput, {nullable:false})
    @Type(() => TableUpdateWithoutBranchInput)
    data!: TableUpdateWithoutBranchInput;
}
