import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyCategoryInput } from './product-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyCategoryInputEnvelope {

    @Field(() => [ProductCreateManyCategoryInput], {nullable:false})
    @Type(() => ProductCreateManyCategoryInput)
    data!: Array<ProductCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
