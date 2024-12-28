import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductSize } from './product-size.enum';

@InputType()
export class EnumProductSizeFieldUpdateOperationsInput {

    @Field(() => ProductSize, {nullable:true})
    set?: keyof typeof ProductSize;
}
