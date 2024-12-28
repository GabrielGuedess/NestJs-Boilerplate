import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCustomerInput } from '../user/user-create-nested-one-without-customer.input';

@InputType()
export class CustomerCreateWithoutBranchesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    cnpj!: string;

    @Field(() => String, {nullable:false})
    company_name!: string;

    @Field(() => String, {nullable:false})
    fantasy_name!: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UserCreateNestedOneWithoutCustomerInput, {nullable:false})
    User!: UserCreateNestedOneWithoutCustomerInput;
}
