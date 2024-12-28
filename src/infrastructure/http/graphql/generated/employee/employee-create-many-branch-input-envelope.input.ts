import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateManyBranchInput } from './employee-create-many-branch.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeCreateManyBranchInputEnvelope {

    @Field(() => [EmployeeCreateManyBranchInput], {nullable:false})
    @Type(() => EmployeeCreateManyBranchInput)
    data!: Array<EmployeeCreateManyBranchInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
