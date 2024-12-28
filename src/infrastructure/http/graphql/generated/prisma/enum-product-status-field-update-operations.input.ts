import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductStatus } from './product-status.enum';

@InputType()
export class EnumProductStatusFieldUpdateOperationsInput {

    @Field(() => ProductStatus, {nullable:true})
    set?: keyof typeof ProductStatus;
}
