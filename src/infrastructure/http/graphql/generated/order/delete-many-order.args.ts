import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyOrderArgs {

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;
}
