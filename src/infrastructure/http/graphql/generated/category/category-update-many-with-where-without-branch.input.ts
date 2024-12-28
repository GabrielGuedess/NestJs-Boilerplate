import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryScalarWhereInput } from './category-scalar-where.input';
import { Type } from 'class-transformer';
import { CategoryUpdateManyMutationInput } from './category-update-many-mutation.input';

@InputType()
export class CategoryUpdateManyWithWhereWithoutBranchInput {

    @Field(() => CategoryScalarWhereInput, {nullable:false})
    @Type(() => CategoryScalarWhereInput)
    where!: CategoryScalarWhereInput;

    @Field(() => CategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => CategoryUpdateManyMutationInput)
    data!: CategoryUpdateManyMutationInput;
}
