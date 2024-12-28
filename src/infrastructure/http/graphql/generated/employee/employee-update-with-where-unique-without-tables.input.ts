import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutTablesInput } from './employee-update-without-tables.input';

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutTablesInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => EmployeeUpdateWithoutTablesInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutTablesInput)
    data!: EmployeeUpdateWithoutTablesInput;
}
