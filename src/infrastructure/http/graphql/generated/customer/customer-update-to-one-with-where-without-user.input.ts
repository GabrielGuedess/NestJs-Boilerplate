import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutUserInput } from './customer-update-without-user.input';

@InputType()
export class CustomerUpdateToOneWithWhereWithoutUserInput {

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;

    @Field(() => CustomerUpdateWithoutUserInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutUserInput)
    data!: CustomerUpdateWithoutUserInput;
}
