import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TableAvgAggregate {

    @Field(() => Float, {nullable:true})
    capacity?: number;
}
