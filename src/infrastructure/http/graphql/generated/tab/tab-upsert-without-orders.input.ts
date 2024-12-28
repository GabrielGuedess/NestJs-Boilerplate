import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabUpdateWithoutOrdersInput } from './tab-update-without-orders.input';
import { Type } from 'class-transformer';
import { TabCreateWithoutOrdersInput } from './tab-create-without-orders.input';
import { TabWhereInput } from './tab-where.input';

@InputType()
export class TabUpsertWithoutOrdersInput {

    @Field(() => TabUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => TabUpdateWithoutOrdersInput)
    update!: TabUpdateWithoutOrdersInput;

    @Field(() => TabCreateWithoutOrdersInput, {nullable:false})
    @Type(() => TabCreateWithoutOrdersInput)
    create!: TabCreateWithoutOrdersInput;

    @Field(() => TabWhereInput, {nullable:true})
    @Type(() => TabWhereInput)
    where?: TabWhereInput;
}
