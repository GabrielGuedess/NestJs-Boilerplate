import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerUpdateWithoutUserInput } from './customer-update-without-user.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutUserInput } from './customer-create-without-user.input';
import { CustomerWhereInput } from './customer-where.input';

@InputType()
export class CustomerUpsertWithoutUserInput {

    @Field(() => CustomerUpdateWithoutUserInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutUserInput)
    update!: CustomerUpdateWithoutUserInput;

    @Field(() => CustomerCreateWithoutUserInput, {nullable:false})
    @Type(() => CustomerCreateWithoutUserInput)
    create!: CustomerCreateWithoutUserInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;
}
