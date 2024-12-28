import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TabCreateManyInput } from './tab-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTabArgs {

    @Field(() => [TabCreateManyInput], {nullable:false})
    @Type(() => TabCreateManyInput)
    data!: Array<TabCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
