import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductSumAggregate {

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => Int, {nullable:true})
    calories?: number;

    @Field(() => Int, {nullable:true})
    preparation_time?: number;
}
