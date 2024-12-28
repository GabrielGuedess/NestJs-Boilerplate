import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderScalarWhereInput } from './order-scalar-where.input';
import { Type } from 'class-transformer';
import { OrderUpdateManyMutationInput } from './order-update-many-mutation.input';

@InputType()
export class OrderUpdateManyWithWhereWithoutTabInput {

    @Field(() => OrderScalarWhereInput, {nullable:false})
    @Type(() => OrderScalarWhereInput)
    where!: OrderScalarWhereInput;

    @Field(() => OrderUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderUpdateManyMutationInput)
    data!: OrderUpdateManyMutationInput;
}
