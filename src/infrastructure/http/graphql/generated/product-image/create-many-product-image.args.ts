import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductImageCreateManyInput } from './product-image-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductImageArgs {

    @Field(() => [ProductImageCreateManyInput], {nullable:false})
    @Type(() => ProductImageCreateManyInput)
    data!: Array<ProductImageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
