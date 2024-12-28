import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BranchCountAggregate } from './branch-count-aggregate.output';
import { BranchMinAggregate } from './branch-min-aggregate.output';
import { BranchMaxAggregate } from './branch-max-aggregate.output';

@ObjectType()
export class BranchGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    cnpj!: string;

    @Field(() => String, {nullable:false})
    zip_code!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    address_number!: string;

    @Field(() => String, {nullable:false})
    address_complement!: string;

    @Field(() => String, {nullable:false})
    address_neighborhood!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => String, {nullable:false})
    branch_name!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    customer_id!: string;

    @Field(() => BranchCountAggregate, {nullable:true})
    _count?: BranchCountAggregate;

    @Field(() => BranchMinAggregate, {nullable:true})
    _min?: BranchMinAggregate;

    @Field(() => BranchMaxAggregate, {nullable:true})
    _max?: BranchMaxAggregate;
}
