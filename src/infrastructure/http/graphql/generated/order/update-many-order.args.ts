import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderUpdateManyMutationInput } from './order-update-many-mutation.input';
import { Type } from 'class-transformer';
import { OrderWhereInput } from './order-where.input';

@ArgsType()
export class UpdateManyOrderArgs {

    @Field(() => OrderUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderUpdateManyMutationInput)
    data!: OrderUpdateManyMutationInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;
}
