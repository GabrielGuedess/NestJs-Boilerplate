import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';

@InputType()
export class CustomerNullableRelationFilter {

    @Field(() => CustomerWhereInput, {nullable:true})
    is?: CustomerWhereInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    isNot?: CustomerWhereInput;
}
