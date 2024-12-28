import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEmployeeInput } from './user-create-without-employee.input';

@InputType()
export class UserCreateOrConnectWithoutEmployeeInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'document'>;

    @Field(() => UserCreateWithoutEmployeeInput, {nullable:false})
    @Type(() => UserCreateWithoutEmployeeInput)
    create!: UserCreateWithoutEmployeeInput;
}
