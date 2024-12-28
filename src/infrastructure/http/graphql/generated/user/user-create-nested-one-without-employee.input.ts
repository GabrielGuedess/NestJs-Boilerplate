import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEmployeeInput } from './user-create-without-employee.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEmployeeInput } from './user-create-or-connect-without-employee.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutEmployeeInput {

    @Field(() => UserCreateWithoutEmployeeInput, {nullable:true})
    @Type(() => UserCreateWithoutEmployeeInput)
    create?: UserCreateWithoutEmployeeInput;

    @Field(() => UserCreateOrConnectWithoutEmployeeInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEmployeeInput)
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'document'>;
}
