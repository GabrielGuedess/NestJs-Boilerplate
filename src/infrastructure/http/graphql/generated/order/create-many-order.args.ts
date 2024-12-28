import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderCreateManyInput } from './order-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyOrderArgs {

    @Field(() => [OrderCreateManyInput], {nullable:false})
    @Type(() => OrderCreateManyInput)
    data!: Array<OrderCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
