import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabWhereInput } from './tab-where.input';

@InputType()
export class TabListRelationFilter {

    @Field(() => TabWhereInput, {nullable:true})
    every?: TabWhereInput;

    @Field(() => TabWhereInput, {nullable:true})
    some?: TabWhereInput;

    @Field(() => TabWhereInput, {nullable:true})
    none?: TabWhereInput;
}
