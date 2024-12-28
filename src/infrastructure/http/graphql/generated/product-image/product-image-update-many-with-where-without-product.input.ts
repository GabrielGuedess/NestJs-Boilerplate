import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductImageScalarWhereInput } from './product-image-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductImageUpdateManyMutationInput } from './product-image-update-many-mutation.input';

@InputType()
export class ProductImageUpdateManyWithWhereWithoutProductInput {

    @Field(() => ProductImageScalarWhereInput, {nullable:false})
    @Type(() => ProductImageScalarWhereInput)
    where!: ProductImageScalarWhereInput;

    @Field(() => ProductImageUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductImageUpdateManyMutationInput)
    data!: ProductImageUpdateManyMutationInput;
}
