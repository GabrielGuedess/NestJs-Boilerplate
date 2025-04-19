import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Role } from '../prisma/role.enum';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    full_name?: string;

    @Field(() => String, {nullable:true})
    document?: string;

    @Field(() => String, {nullable:true})
    avatar_url?: string;

    @Field(() => Role, {nullable:true})
    role?: `${Role}`;

    @Field(() => Boolean, {nullable:true})
    validated?: boolean;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @HideField()
    password?: string;
}
