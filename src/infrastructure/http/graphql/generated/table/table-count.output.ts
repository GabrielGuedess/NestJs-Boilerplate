import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TableCount {

    @Field(() => Int, {nullable:false})
    Tabs?: number;

    @Field(() => Int, {nullable:false})
    Employees?: number;
}
