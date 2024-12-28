import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { Type } from 'class-transformer';
import { TableUpdateWithoutEmployeesInput } from './table-update-without-employees.input';

@InputType()
export class TableUpdateWithWhereUniqueWithoutEmployeesInput {

    @Field(() => TableWhereUniqueInput, {nullable:false})
    @Type(() => TableWhereUniqueInput)
    where!: Prisma.AtLeast<TableWhereUniqueInput, 'id'>;

    @Field(() => TableUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => TableUpdateWithoutEmployeesInput)
    data!: TableUpdateWithoutEmployeesInput;
}
