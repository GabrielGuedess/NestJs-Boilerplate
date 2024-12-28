import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TableAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    capacity?: true;
}
