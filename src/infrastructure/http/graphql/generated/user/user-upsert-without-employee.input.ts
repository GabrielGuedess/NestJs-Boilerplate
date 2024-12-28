import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutEmployeeInput } from './user-update-without-employee.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEmployeeInput } from './user-create-without-employee.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutEmployeeInput {

    @Field(() => UserUpdateWithoutEmployeeInput, {nullable:false})
    @Type(() => UserUpdateWithoutEmployeeInput)
    update!: UserUpdateWithoutEmployeeInput;

    @Field(() => UserCreateWithoutEmployeeInput, {nullable:false})
    @Type(() => UserCreateWithoutEmployeeInput)
    create!: UserCreateWithoutEmployeeInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
