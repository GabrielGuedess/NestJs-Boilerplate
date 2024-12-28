import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TabUpdateManyMutationInput } from './tab-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TabWhereInput } from './tab-where.input';

@ArgsType()
export class UpdateManyTabArgs {

    @Field(() => TabUpdateManyMutationInput, {nullable:false})
    @Type(() => TabUpdateManyMutationInput)
    data!: TabUpdateManyMutationInput;

    @Field(() => TabWhereInput, {nullable:true})
    @Type(() => TabWhereInput)
    where?: TabWhereInput;
}
