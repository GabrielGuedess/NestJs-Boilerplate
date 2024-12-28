import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabCreateManyTableInput } from './tab-create-many-table.input';
import { Type } from 'class-transformer';

@InputType()
export class TabCreateManyTableInputEnvelope {

    @Field(() => [TabCreateManyTableInput], {nullable:false})
    @Type(() => TabCreateManyTableInput)
    data!: Array<TabCreateManyTableInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
