import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCustomerInput } from './user-create-without-customer.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCustomerInput } from './user-create-or-connect-without-customer.input';
import { UserUpsertWithoutCustomerInput } from './user-upsert-without-customer.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCustomerInput } from './user-update-to-one-with-where-without-customer.input';

@InputType()
export class UserUpdateOneRequiredWithoutCustomerNestedInput {

    @Field(() => UserCreateWithoutCustomerInput, {nullable:true})
    @Type(() => UserCreateWithoutCustomerInput)
    create?: UserCreateWithoutCustomerInput;

    @Field(() => UserCreateOrConnectWithoutCustomerInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCustomerInput)
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput;

    @Field(() => UserUpsertWithoutCustomerInput, {nullable:true})
    @Type(() => UserUpsertWithoutCustomerInput)
    upsert?: UserUpsertWithoutCustomerInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'document'>;

    @Field(() => UserUpdateToOneWithWhereWithoutCustomerInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCustomerInput)
    update?: UserUpdateToOneWithWhereWithoutCustomerInput;
}
