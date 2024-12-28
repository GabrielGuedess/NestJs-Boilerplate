import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TabWhereInput } from './tab-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTabArgs {

    @Field(() => TabWhereInput, {nullable:true})
    @Type(() => TabWhereInput)
    where?: TabWhereInput;
}
