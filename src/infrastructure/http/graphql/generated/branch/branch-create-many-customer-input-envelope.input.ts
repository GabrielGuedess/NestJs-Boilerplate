import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchCreateManyCustomerInput } from './branch-create-many-customer.input';
import { Type } from 'class-transformer';

@InputType()
export class BranchCreateManyCustomerInputEnvelope {

    @Field(() => [BranchCreateManyCustomerInput], {nullable:false})
    @Type(() => BranchCreateManyCustomerInput)
    data!: Array<BranchCreateManyCustomerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
