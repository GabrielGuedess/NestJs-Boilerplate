import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchWhereInput } from './branch-where.input';
import { Type } from 'class-transformer';
import { BranchUpdateWithoutEmployeesInput } from './branch-update-without-employees.input';

@InputType()
export class BranchUpdateToOneWithWhereWithoutEmployeesInput {

    @Field(() => BranchWhereInput, {nullable:true})
    @Type(() => BranchWhereInput)
    where?: BranchWhereInput;

    @Field(() => BranchUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => BranchUpdateWithoutEmployeesInput)
    data!: BranchUpdateWithoutEmployeesInput;
}
