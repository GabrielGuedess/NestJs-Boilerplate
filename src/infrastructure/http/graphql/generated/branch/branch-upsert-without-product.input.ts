import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchUpdateWithoutProductInput } from './branch-update-without-product.input';
import { Type } from 'class-transformer';
import { BranchCreateWithoutProductInput } from './branch-create-without-product.input';
import { BranchWhereInput } from './branch-where.input';

@InputType()
export class BranchUpsertWithoutProductInput {

    @Field(() => BranchUpdateWithoutProductInput, {nullable:false})
    @Type(() => BranchUpdateWithoutProductInput)
    update!: BranchUpdateWithoutProductInput;

    @Field(() => BranchCreateWithoutProductInput, {nullable:false})
    @Type(() => BranchCreateWithoutProductInput)
    create!: BranchCreateWithoutProductInput;

    @Field(() => BranchWhereInput, {nullable:true})
    @Type(() => BranchWhereInput)
    where?: BranchWhereInput;
}
