import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchUpdateWithoutEmployeesInput } from './branch-update-without-employees.input';
import { Type } from 'class-transformer';
import { BranchCreateWithoutEmployeesInput } from './branch-create-without-employees.input';
import { BranchWhereInput } from './branch-where.input';

@InputType()
export class BranchUpsertWithoutEmployeesInput {

    @Field(() => BranchUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => BranchUpdateWithoutEmployeesInput)
    update!: BranchUpdateWithoutEmployeesInput;

    @Field(() => BranchCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => BranchCreateWithoutEmployeesInput)
    create!: BranchCreateWithoutEmployeesInput;

    @Field(() => BranchWhereInput, {nullable:true})
    @Type(() => BranchWhereInput)
    where?: BranchWhereInput;
}
