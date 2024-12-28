import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutTablesInput } from './employee-create-without-tables.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutTablesInput } from './employee-create-or-connect-without-tables.input';
import { EmployeeUpsertWithWhereUniqueWithoutTablesInput } from './employee-upsert-with-where-unique-without-tables.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutTablesInput } from './employee-update-with-where-unique-without-tables.input';
import { EmployeeUpdateManyWithWhereWithoutTablesInput } from './employee-update-many-with-where-without-tables.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUncheckedUpdateManyWithoutTablesNestedInput {

    @Field(() => [EmployeeCreateWithoutTablesInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutTablesInput)
    create?: Array<EmployeeCreateWithoutTablesInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutTablesInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutTablesInput)
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutTablesInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutTablesInput], {nullable:true})
    @Type(() => EmployeeUpsertWithWhereUniqueWithoutTablesInput)
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutTablesInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>>;

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutTablesInput], {nullable:true})
    @Type(() => EmployeeUpdateWithWhereUniqueWithoutTablesInput)
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutTablesInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutTablesInput], {nullable:true})
    @Type(() => EmployeeUpdateManyWithWhereWithoutTablesInput)
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutTablesInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    @Type(() => EmployeeScalarWhereInput)
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
