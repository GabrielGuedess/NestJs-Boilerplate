import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeCreateInput } from './employee-create.input';
import { EmployeeUpdateInput } from './employee-update.input';

@ArgsType()
export class UpsertOneEmployeeArgs {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => EmployeeCreateInput, {nullable:false})
    @Type(() => EmployeeCreateInput)
    create!: EmployeeCreateInput;

    @Field(() => EmployeeUpdateInput, {nullable:false})
    @Type(() => EmployeeUpdateInput)
    update!: EmployeeUpdateInput;
}
