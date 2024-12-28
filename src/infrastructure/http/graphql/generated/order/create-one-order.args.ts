import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderCreateInput } from './order-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOrderArgs {

    @Field(() => OrderCreateInput, {nullable:false})
    @Type(() => OrderCreateInput)
    data!: OrderCreateInput;
}
