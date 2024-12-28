import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TabSumAggregate {

    @Field(() => Int, {nullable:true})
    value?: number;

    @Field(() => Int, {nullable:true})
    employee_tax?: number;

    @Field(() => Int, {nullable:true})
    discount?: number;
}
