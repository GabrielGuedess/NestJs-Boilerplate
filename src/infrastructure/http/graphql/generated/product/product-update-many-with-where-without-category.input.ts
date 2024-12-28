import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductScalarWhereInput } from './product-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateManyMutationInput } from './product-update-many-mutation.input';

@InputType()
export class ProductUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => ProductScalarWhereInput, {nullable:false})
    @Type(() => ProductScalarWhereInput)
    where!: ProductScalarWhereInput;

    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    data!: ProductUpdateManyMutationInput;
}
