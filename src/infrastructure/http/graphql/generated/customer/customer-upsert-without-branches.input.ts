import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerUpdateWithoutBranchesInput } from './customer-update-without-branches.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutBranchesInput } from './customer-create-without-branches.input';
import { CustomerWhereInput } from './customer-where.input';

@InputType()
export class CustomerUpsertWithoutBranchesInput {

    @Field(() => CustomerUpdateWithoutBranchesInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutBranchesInput)
    update!: CustomerUpdateWithoutBranchesInput;

    @Field(() => CustomerCreateWithoutBranchesInput, {nullable:false})
    @Type(() => CustomerCreateWithoutBranchesInput)
    create!: CustomerCreateWithoutBranchesInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;
}
