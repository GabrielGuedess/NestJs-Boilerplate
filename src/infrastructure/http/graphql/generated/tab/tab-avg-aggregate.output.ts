import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TabAvgAggregate {

    @Field(() => Float, {nullable:true})
    value?: number;

    @Field(() => Float, {nullable:true})
    employee_tax?: number;

    @Field(() => Float, {nullable:true})
    discount?: number;
}
