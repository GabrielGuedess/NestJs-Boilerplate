import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    full_name!: number;

    @Field(() => Int, {nullable:false})
    document!: number;

    @Field(() => Int, {nullable:false})
    avatar_url!: number;

    @Field(() => Int, {nullable:false})
    role!: number;

    @Field(() => Int, {nullable:false})
    validated!: number;

    @Field(() => Int, {nullable:false})
    active!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @HideField()
    password!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
