import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TabCreateInput } from './tab-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTabArgs {

    @Field(() => TabCreateInput, {nullable:false})
    @Type(() => TabCreateInput)
    data!: TabCreateInput;
}
