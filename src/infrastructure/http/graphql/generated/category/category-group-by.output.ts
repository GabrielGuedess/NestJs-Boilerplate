import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CategoryCountAggregate } from './category-count-aggregate.output';
import { CategoryMinAggregate } from './category-min-aggregate.output';
import { CategoryMaxAggregate } from './category-max-aggregate.output';

@ObjectType()
export class CategoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    branch_id!: string;

    @Field(() => CategoryCountAggregate, {nullable:true})
    _count?: CategoryCountAggregate;

    @Field(() => CategoryMinAggregate, {nullable:true})
    _min?: CategoryMinAggregate;

    @Field(() => CategoryMaxAggregate, {nullable:true})
    _max?: CategoryMaxAggregate;
}
