import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutProductImagesInput } from './product-update-without-product-images.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutProductImagesInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutProductImagesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutProductImagesInput)
    data!: ProductUpdateWithoutProductImagesInput;
}
