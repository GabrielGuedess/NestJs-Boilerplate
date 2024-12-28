import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableWhereInput } from './table-where.input';

@InputType()
export class TableListRelationFilter {

    @Field(() => TableWhereInput, {nullable:true})
    every?: TableWhereInput;

    @Field(() => TableWhereInput, {nullable:true})
    some?: TableWhereInput;

    @Field(() => TableWhereInput, {nullable:true})
    none?: TableWhereInput;
}
