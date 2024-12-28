import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabWhereInput } from './tab-where.input';
import { Type } from 'class-transformer';
import { TabUpdateWithoutOrdersInput } from './tab-update-without-orders.input';

@InputType()
export class TabUpdateToOneWithWhereWithoutOrdersInput {

    @Field(() => TabWhereInput, {nullable:true})
    @Type(() => TabWhereInput)
    where?: TabWhereInput;

    @Field(() => TabUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => TabUpdateWithoutOrdersInput)
    data!: TabUpdateWithoutOrdersInput;
}
