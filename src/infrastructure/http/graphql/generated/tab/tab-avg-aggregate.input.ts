import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TabAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    value?: true;

    @Field(() => Boolean, {nullable:true})
    employee_tax?: true;

    @Field(() => Boolean, {nullable:true})
    discount?: true;
}
