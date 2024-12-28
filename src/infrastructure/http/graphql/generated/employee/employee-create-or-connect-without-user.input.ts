import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutUserInput } from './employee-create-without-user.input';

@InputType()
export class EmployeeCreateOrConnectWithoutUserInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => EmployeeCreateWithoutUserInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutUserInput)
    create!: EmployeeCreateWithoutUserInput;
}
