import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutEmployeeInput } from './user-update-without-employee.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutEmployeeInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutEmployeeInput, {nullable:false})
    @Type(() => UserUpdateWithoutEmployeeInput)
    data!: UserUpdateWithoutEmployeeInput;
}
