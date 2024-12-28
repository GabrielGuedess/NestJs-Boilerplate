import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabWhereInput } from './tab-where.input';

@InputType()
export class TabRelationFilter {

    @Field(() => TabWhereInput, {nullable:true})
    is?: TabWhereInput;

    @Field(() => TabWhereInput, {nullable:true})
    isNot?: TabWhereInput;
}
