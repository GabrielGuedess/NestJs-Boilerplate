import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabScalarWhereInput } from './tab-scalar-where.input';
import { Type } from 'class-transformer';
import { TabUpdateManyMutationInput } from './tab-update-many-mutation.input';

@InputType()
export class TabUpdateManyWithWhereWithoutOrdersInput {

    @Field(() => TabScalarWhereInput, {nullable:false})
    @Type(() => TabScalarWhereInput)
    where!: TabScalarWhereInput;

    @Field(() => TabUpdateManyMutationInput, {nullable:false})
    @Type(() => TabUpdateManyMutationInput)
    data!: TabUpdateManyMutationInput;
}
