import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TableSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    capacity?: true;
}
