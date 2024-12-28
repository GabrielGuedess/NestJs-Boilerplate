import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableWhereInput } from './table-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTableArgs {

    @Field(() => TableWhereInput, {nullable:true})
    @Type(() => TableWhereInput)
    where?: TableWhereInput;
}
