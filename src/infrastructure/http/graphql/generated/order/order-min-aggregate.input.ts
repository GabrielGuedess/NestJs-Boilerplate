import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    total_price?: true;

    @Field(() => Boolean, {nullable:true})
    observations?: true;

    @Field(() => Boolean, {nullable:true})
    payment_status?: true;

    @Field(() => Boolean, {nullable:true})
    payment_date?: true;

    @Field(() => Boolean, {nullable:true})
    finished_at?: true;

    @Field(() => Boolean, {nullable:true})
    active?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    tab_id?: true;
}
