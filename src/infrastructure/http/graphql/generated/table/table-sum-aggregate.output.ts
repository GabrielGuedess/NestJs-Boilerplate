import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TableSumAggregate {

    @Field(() => Int, {nullable:true})
    capacity?: number;
}
