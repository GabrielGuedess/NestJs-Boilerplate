import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutProductImagesInput } from '../product/product-create-nested-one-without-product-images.input';

@InputType()
export class ProductImageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutProductImagesInput, {nullable:false})
    Product!: ProductCreateNestedOneWithoutProductImagesInput;
}
