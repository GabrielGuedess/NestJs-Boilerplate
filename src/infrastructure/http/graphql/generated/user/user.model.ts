import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Role } from '../prisma/role.enum';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    full_name!: string;

    @Field(() => String, {nullable:false})
    document!: string;

    @Field(() => String, {nullable:true})
    avatar_url!: string | null;

    @Field(() => Role, {defaultValue:'USER',nullable:false})
    role!: `${Role}`;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    validated!: boolean;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @HideField()
    password!: string;
}
