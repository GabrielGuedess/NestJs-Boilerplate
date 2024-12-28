import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableScalarWhereInput } from './table-scalar-where.input';
import { Type } from 'class-transformer';
import { TableUpdateManyMutationInput } from './table-update-many-mutation.input';

@InputType()
export class TableUpdateManyWithWhereWithoutBranchInput {

    @Field(() => TableScalarWhereInput, {nullable:false})
    @Type(() => TableScalarWhereInput)
    where!: TableScalarWhereInput;

    @Field(() => TableUpdateManyMutationInput, {nullable:false})
    @Type(() => TableUpdateManyMutationInput)
    data!: TableUpdateManyMutationInput;
}
