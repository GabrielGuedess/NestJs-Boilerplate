import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchUncheckedCreateNestedManyWithoutCustomerInput } from '../branch/branch-unchecked-create-nested-many-without-customer.input';

@InputType()
export class CustomerUncheckedCreateWithoutUserInput {

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

    @Field(() => BranchUncheckedCreateNestedManyWithoutCustomerInput, {nullable:true})
    Branches?: BranchUncheckedCreateNestedManyWithoutCustomerInput;
}
