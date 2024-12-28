import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchWhereInput } from './branch-where.input';
import { Type } from 'class-transformer';
import { BranchUpdateWithoutProductInput } from './branch-update-without-product.input';

@InputType()
export class BranchUpdateToOneWithWhereWithoutProductInput {

    @Field(() => BranchWhereInput, {nullable:true})
    @Type(() => BranchWhereInput)
    where?: BranchWhereInput;

    @Field(() => BranchUpdateWithoutProductInput, {nullable:false})
    @Type(() => BranchUpdateWithoutProductInput)
    data!: BranchUpdateWithoutProductInput;
}
