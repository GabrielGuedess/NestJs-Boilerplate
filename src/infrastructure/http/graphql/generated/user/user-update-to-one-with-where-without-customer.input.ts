import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCustomerInput } from './user-update-without-customer.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCustomerInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCustomerInput, {nullable:false})
    @Type(() => UserUpdateWithoutCustomerInput)
    data!: UserUpdateWithoutCustomerInput;
}
