import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutTablesInput } from './employee-create-without-tables.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutTablesInput } from './employee-create-or-connect-without-tables.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedManyWithoutTablesInput {

    @Field(() => [EmployeeCreateWithoutTablesInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutTablesInput)
    create?: Array<EmployeeCreateWithoutTablesInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutTablesInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutTablesInput)
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutTablesInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>>;
}
