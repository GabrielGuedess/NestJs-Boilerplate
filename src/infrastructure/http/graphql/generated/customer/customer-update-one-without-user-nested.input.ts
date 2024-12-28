import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutUserInput } from './customer-create-without-user.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutUserInput } from './customer-create-or-connect-without-user.input';
import { CustomerUpsertWithoutUserInput } from './customer-upsert-without-user.input';
import { CustomerWhereInput } from './customer-where.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateToOneWithWhereWithoutUserInput } from './customer-update-to-one-with-where-without-user.input';

@InputType()
export class CustomerUpdateOneWithoutUserNestedInput {

    @Field(() => CustomerCreateWithoutUserInput, {nullable:true})
    @Type(() => CustomerCreateWithoutUserInput)
    create?: CustomerCreateWithoutUserInput;

    @Field(() => CustomerCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutUserInput)
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput;

    @Field(() => CustomerUpsertWithoutUserInput, {nullable:true})
    @Type(() => CustomerUpsertWithoutUserInput)
    upsert?: CustomerUpsertWithoutUserInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    disconnect?: CustomerWhereInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    delete?: CustomerWhereInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    connect?: Prisma.AtLeast<CustomerWhereUniqueInput, 'id' | 'cnpj' | 'user_id'>;

    @Field(() => CustomerUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => CustomerUpdateToOneWithWhereWithoutUserInput)
    update?: CustomerUpdateToOneWithWhereWithoutUserInput;
}
