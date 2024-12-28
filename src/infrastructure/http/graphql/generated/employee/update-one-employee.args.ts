import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeUpdateInput } from './employee-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@ArgsType()
export class UpdateOneEmployeeArgs {

    @Field(() => EmployeeUpdateInput, {nullable:false})
    @Type(() => EmployeeUpdateInput)
    data!: EmployeeUpdateInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>;
}
