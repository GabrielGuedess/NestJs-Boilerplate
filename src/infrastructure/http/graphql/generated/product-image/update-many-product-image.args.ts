import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductImageUpdateManyMutationInput } from './product-image-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductImageWhereInput } from './product-image-where.input';

@ArgsType()
export class UpdateManyProductImageArgs {

    @Field(() => ProductImageUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductImageUpdateManyMutationInput)
    data!: ProductImageUpdateManyMutationInput;

    @Field(() => ProductImageWhereInput, {nullable:true})
    @Type(() => ProductImageWhereInput)
    where?: ProductImageWhereInput;
}
