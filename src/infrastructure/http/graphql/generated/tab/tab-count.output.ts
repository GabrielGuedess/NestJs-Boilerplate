import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TabCount {

    @Field(() => Int, {nullable:false})
    Orders?: number;
}
