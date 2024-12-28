import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    full_name?: true;

    @Field(() => Boolean, {nullable:true})
    document?: true;

    @Field(() => Boolean, {nullable:true})
    avatar_url?: true;

    @Field(() => Boolean, {nullable:true})
    role?: true;

    @Field(() => Boolean, {nullable:true})
    validated?: true;

    @Field(() => Boolean, {nullable:true})
    active?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @HideField()
    password?: true;
}
