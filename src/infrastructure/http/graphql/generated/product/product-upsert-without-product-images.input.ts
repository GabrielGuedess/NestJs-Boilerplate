import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutProductImagesInput } from './product-update-without-product-images.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutProductImagesInput } from './product-create-without-product-images.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutProductImagesInput {

    @Field(() => ProductUpdateWithoutProductImagesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutProductImagesInput)
    update!: ProductUpdateWithoutProductImagesInput;

    @Field(() => ProductCreateWithoutProductImagesInput, {nullable:false})
    @Type(() => ProductCreateWithoutProductImagesInput)
    create!: ProductCreateWithoutProductImagesInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
