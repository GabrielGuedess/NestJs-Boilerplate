import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutTablesInput } from './employee-create-without-tables.input';

@InputType()
export class EmployeeCreateOrConnectWithoutTablesInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => EmployeeCreateWithoutTablesInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutTablesInput)
    create!: EmployeeCreateWithoutTablesInput;
}
