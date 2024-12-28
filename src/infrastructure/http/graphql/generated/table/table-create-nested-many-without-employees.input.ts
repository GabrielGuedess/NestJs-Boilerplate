import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableCreateWithoutEmployeesInput } from './table-create-without-employees.input';
import { Type } from 'class-transformer';
import { TableCreateOrConnectWithoutEmployeesInput } from './table-create-or-connect-without-employees.input';
import { Prisma } from '@prisma/client';
import { TableWhereUniqueInput } from './table-where-unique.input';

@InputType()
export class TableCreateNestedManyWithoutEmployeesInput {

    @Field(() => [TableCreateWithoutEmployeesInput], {nullable:true})
    @Type(() => TableCreateWithoutEmployeesInput)
    create?: Array<TableCreateWithoutEmployeesInput>;

    @Field(() => [TableCreateOrConnectWithoutEmployeesInput], {nullable:true})
    @Type(() => TableCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: Array<TableCreateOrConnectWithoutEmployeesInput>;

    @Field(() => [TableWhereUniqueInput], {nullable:true})
    @Type(() => TableWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TableWhereUniqueInput, 'id'>>;
}
