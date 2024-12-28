import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductImageCreateInput } from './product-image-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductImageArgs {

    @Field(() => ProductImageCreateInput, {nullable:false})
    @Type(() => ProductImageCreateInput)
    data!: ProductImageCreateInput;
}
