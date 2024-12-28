import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchWhereInput } from './branch-where.input';
import { Type } from 'class-transformer';
import { BranchUpdateWithoutTableInput } from './branch-update-without-table.input';

@InputType()
export class BranchUpdateToOneWithWhereWithoutTableInput {

    @Field(() => BranchWhereInput, {nullable:true})
    @Type(() => BranchWhereInput)
    where?: BranchWhereInput;

    @Field(() => BranchUpdateWithoutTableInput, {nullable:false})
    @Type(() => BranchUpdateWithoutTableInput)
    data!: BranchUpdateWithoutTableInput;
}
