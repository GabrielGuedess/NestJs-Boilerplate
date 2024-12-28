import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';

@InputType()
export class OrderListRelationFilter {

    @Field(() => OrderWhereInput, {nullable:true})
    every?: OrderWhereInput;

    @Field(() => OrderWhereInput, {nullable:true})
    some?: OrderWhereInput;

    @Field(() => OrderWhereInput, {nullable:true})
    none?: OrderWhereInput;
}
