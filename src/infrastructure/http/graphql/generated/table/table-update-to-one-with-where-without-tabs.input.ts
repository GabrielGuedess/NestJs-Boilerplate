import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableWhereInput } from './table-where.input';
import { Type } from 'class-transformer';
import { TableUpdateWithoutTabsInput } from './table-update-without-tabs.input';

@InputType()
export class TableUpdateToOneWithWhereWithoutTabsInput {

    @Field(() => TableWhereInput, {nullable:true})
    @Type(() => TableWhereInput)
    where?: TableWhereInput;

    @Field(() => TableUpdateWithoutTabsInput, {nullable:false})
    @Type(() => TableUpdateWithoutTabsInput)
    data!: TableUpdateWithoutTabsInput;
}
