import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { HideField } from '@nestjs/graphql';
import { EmployeeCreateNestedOneWithoutUserInput } from '../employee/employee-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutCustomerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    full_name!: string;

    @Field(() => String, {nullable:false})
    document!: string;

    @Field(() => String, {nullable:true})
    avatar_url?: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => Boolean, {nullable:true})
    validated?: boolean;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @HideField()
    password!: string;

    @Field(() => EmployeeCreateNestedOneWithoutUserInput, {nullable:true})
    Employee?: EmployeeCreateNestedOneWithoutUserInput;
}
