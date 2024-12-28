import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchScalarWhereInput } from './branch-scalar-where.input';
import { Type } from 'class-transformer';
import { BranchUpdateManyMutationInput } from './branch-update-many-mutation.input';

@InputType()
export class BranchUpdateManyWithWhereWithoutCustomerInput {

    @Field(() => BranchScalarWhereInput, {nullable:false})
    @Type(() => BranchScalarWhereInput)
    where!: BranchScalarWhereInput;

    @Field(() => BranchUpdateManyMutationInput, {nullable:false})
    @Type(() => BranchUpdateManyMutationInput)
    data!: BranchUpdateManyMutationInput;
}
