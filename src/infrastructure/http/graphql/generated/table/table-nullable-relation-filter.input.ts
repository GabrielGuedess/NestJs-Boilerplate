import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableWhereInput } from './table-where.input';

@InputType()
export class TableNullableRelationFilter {

    @Field(() => TableWhereInput, {nullable:true})
    is?: TableWhereInput;

    @Field(() => TableWhereInput, {nullable:true})
    isNot?: TableWhereInput;
}
