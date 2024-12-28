import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductImageCreateManyProductInput } from './product-image-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductImageCreateManyProductInputEnvelope {

    @Field(() => [ProductImageCreateManyProductInput], {nullable:false})
    @Type(() => ProductImageCreateManyProductInput)
    data!: Array<ProductImageCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
