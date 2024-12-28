import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutBranchesInput } from './customer-update-without-branches.input';

@InputType()
export class CustomerUpdateToOneWithWhereWithoutBranchesInput {

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;

    @Field(() => CustomerUpdateWithoutBranchesInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutBranchesInput)
    data!: CustomerUpdateWithoutBranchesInput;
}
