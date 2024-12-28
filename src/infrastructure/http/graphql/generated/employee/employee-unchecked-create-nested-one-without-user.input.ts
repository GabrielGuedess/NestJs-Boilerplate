import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutUserInput } from './employee-create-without-user.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutUserInput } from './employee-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => EmployeeCreateWithoutUserInput, {nullable:true})
    @Type(() => EmployeeCreateWithoutUserInput)
    create?: EmployeeCreateWithoutUserInput;

    @Field(() => EmployeeCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutUserInput)
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>;
}
