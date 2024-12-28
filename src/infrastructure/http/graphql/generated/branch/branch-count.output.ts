import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BranchCount {

    @Field(() => Int, {nullable:false})
    Employees?: number;

    @Field(() => Int, {nullable:false})
    Table?: number;

    @Field(() => Int, {nullable:false})
    Category?: number;

    @Field(() => Int, {nullable:false})
    Product?: number;
}
