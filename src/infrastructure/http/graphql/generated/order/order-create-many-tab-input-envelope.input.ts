import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyTabInput } from './order-create-many-tab.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderCreateManyTabInputEnvelope {

    @Field(() => [OrderCreateManyTabInput], {nullable:false})
    @Type(() => OrderCreateManyTabInput)
    data!: Array<OrderCreateManyTabInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
