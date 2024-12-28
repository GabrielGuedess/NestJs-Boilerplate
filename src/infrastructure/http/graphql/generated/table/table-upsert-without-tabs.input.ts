import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableUpdateWithoutTabsInput } from './table-update-without-tabs.input';
import { Type } from 'class-transformer';
import { TableCreateWithoutTabsInput } from './table-create-without-tabs.input';
import { TableWhereInput } from './table-where.input';

@InputType()
export class TableUpsertWithoutTabsInput {

    @Field(() => TableUpdateWithoutTabsInput, {nullable:false})
    @Type(() => TableUpdateWithoutTabsInput)
    update!: TableUpdateWithoutTabsInput;

    @Field(() => TableCreateWithoutTabsInput, {nullable:false})
    @Type(() => TableCreateWithoutTabsInput)
    create!: TableCreateWithoutTabsInput;

    @Field(() => TableWhereInput, {nullable:true})
    @Type(() => TableWhereInput)
    where?: TableWhereInput;
}
