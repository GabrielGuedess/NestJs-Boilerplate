import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { Type } from 'class-transformer';
import { TableCreateWithoutEmployeesInput } from './table-create-without-employees.input';

@InputType()
export class TableCreateOrConnectWithoutEmployeesInput {

    @Field(() => TableWhereUniqueInput, {nullable:false})
    @Type(() => TableWhereUniqueInput)
    where!: Prisma.AtLeast<TableWhereUniqueInput, 'id'>;

    @Field(() => TableCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => TableCreateWithoutEmployeesInput)
    create!: TableCreateWithoutEmployeesInput;
}
