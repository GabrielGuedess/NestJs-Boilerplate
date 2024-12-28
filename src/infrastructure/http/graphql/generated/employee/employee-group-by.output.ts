import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmployeeCountAggregate } from './employee-count-aggregate.output';
import { EmployeeMinAggregate } from './employee-min-aggregate.output';
import { EmployeeMaxAggregate } from './employee-max-aggregate.output';

@ObjectType()
export class EmployeeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    branch_id!: string;

    @Field(() => EmployeeCountAggregate, {nullable:true})
    _count?: EmployeeCountAggregate;

    @Field(() => EmployeeMinAggregate, {nullable:true})
    _min?: EmployeeMinAggregate;

    @Field(() => EmployeeMaxAggregate, {nullable:true})
    _max?: EmployeeMaxAggregate;
}
