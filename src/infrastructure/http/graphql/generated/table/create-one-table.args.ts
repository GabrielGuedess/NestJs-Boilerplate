import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableCreateInput } from './table-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTableArgs {

    @Field(() => TableCreateInput, {nullable:false})
    @Type(() => TableCreateInput)
    data!: TableCreateInput;
}
