import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableUpdateManyMutationInput } from './table-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TableWhereInput } from './table-where.input';

@ArgsType()
export class UpdateManyTableArgs {

    @Field(() => TableUpdateManyMutationInput, {nullable:false})
    @Type(() => TableUpdateManyMutationInput)
    data!: TableUpdateManyMutationInput;

    @Field(() => TableWhereInput, {nullable:true})
    @Type(() => TableWhereInput)
    where?: TableWhereInput;
}
