import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEmployeeInput } from './user-create-without-employee.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEmployeeInput } from './user-create-or-connect-without-employee.input';
import { UserUpsertWithoutEmployeeInput } from './user-upsert-without-employee.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutEmployeeInput } from './user-update-to-one-with-where-without-employee.input';

@InputType()
export class UserUpdateOneRequiredWithoutEmployeeNestedInput {

    @Field(() => UserCreateWithoutEmployeeInput, {nullable:true})
    @Type(() => UserCreateWithoutEmployeeInput)
    create?: UserCreateWithoutEmployeeInput;

    @Field(() => UserCreateOrConnectWithoutEmployeeInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEmployeeInput)
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput;

    @Field(() => UserUpsertWithoutEmployeeInput, {nullable:true})
    @Type(() => UserUpsertWithoutEmployeeInput)
    upsert?: UserUpsertWithoutEmployeeInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'document'>;

    @Field(() => UserUpdateToOneWithWhereWithoutEmployeeInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutEmployeeInput)
    update?: UserUpdateToOneWithWhereWithoutEmployeeInput;
}
