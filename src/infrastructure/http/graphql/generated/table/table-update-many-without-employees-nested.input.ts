import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableCreateWithoutEmployeesInput } from './table-create-without-employees.input';
import { Type } from 'class-transformer';
import { TableCreateOrConnectWithoutEmployeesInput } from './table-create-or-connect-without-employees.input';
import { TableUpsertWithWhereUniqueWithoutEmployeesInput } from './table-upsert-with-where-unique-without-employees.input';
import { Prisma } from '@prisma/client';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { TableUpdateWithWhereUniqueWithoutEmployeesInput } from './table-update-with-where-unique-without-employees.input';
import { TableUpdateManyWithWhereWithoutEmployeesInput } from './table-update-many-with-where-without-employees.input';
import { TableScalarWhereInput } from './table-scalar-where.input';

@InputType()
export class TableUpdateManyWithoutEmployeesNestedInput {

    @Field(() => [TableCreateWithoutEmployeesInput], {nullable:true})
    @Type(() => TableCreateWithoutEmployeesInput)
    create?: Array<TableCreateWithoutEmployeesInput>;

    @Field(() => [TableCreateOrConnectWithoutEmployeesInput], {nullable:true})
    @Type(() => TableCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: Array<TableCreateOrConnectWithoutEmployeesInput>;

    @Field(() => [TableUpsertWithWhereUniqueWithoutEmployeesInput], {nullable:true})
    @Type(() => TableUpsertWithWhereUniqueWithoutEmployeesInput)
    upsert?: Array<TableUpsertWithWhereUniqueWithoutEmployeesInput>;

    @Field(() => [TableWhereUniqueInput], {nullable:true})
    @Type(() => TableWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TableWhereUniqueInput, 'id'>>;

    @Field(() => [TableWhereUniqueInput], {nullable:true})
    @Type(() => TableWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TableWhereUniqueInput, 'id'>>;

    @Field(() => [TableWhereUniqueInput], {nullable:true})
    @Type(() => TableWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TableWhereUniqueInput, 'id'>>;

    @Field(() => [TableWhereUniqueInput], {nullable:true})
    @Type(() => TableWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TableWhereUniqueInput, 'id'>>;

    @Field(() => [TableUpdateWithWhereUniqueWithoutEmployeesInput], {nullable:true})
    @Type(() => TableUpdateWithWhereUniqueWithoutEmployeesInput)
    update?: Array<TableUpdateWithWhereUniqueWithoutEmployeesInput>;

    @Field(() => [TableUpdateManyWithWhereWithoutEmployeesInput], {nullable:true})
    @Type(() => TableUpdateManyWithWhereWithoutEmployeesInput)
    updateMany?: Array<TableUpdateManyWithWhereWithoutEmployeesInput>;

    @Field(() => [TableScalarWhereInput], {nullable:true})
    @Type(() => TableScalarWhereInput)
    deleteMany?: Array<TableScalarWhereInput>;
}
