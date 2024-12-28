import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Branch } from '../branch/branch.model';
import { CustomerCount } from './customer-count.output';

@ObjectType()
export class Customer {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    cnpj!: string;

    @Field(() => String, {nullable:false})
    company_name!: string;

    @Field(() => String, {nullable:false})
    fantasy_name!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => User, {nullable:false})
    User?: User;

    @Field(() => [Branch], {nullable:true})
    Branches?: Array<Branch>;

    @Field(() => CustomerCount, {nullable:false})
    _count?: CustomerCount;
}
