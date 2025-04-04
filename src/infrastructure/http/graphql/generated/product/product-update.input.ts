import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumProductStatusFieldUpdateOperationsInput } from '../prisma/enum-product-status-field-update-operations.input';
import { EnumProductSizeFieldUpdateOperationsInput } from '../prisma/enum-product-size-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BranchUpdateOneRequiredWithoutProductNestedInput } from '../branch/branch-update-one-required-without-product-nested.input';
import { CategoryUpdateOneRequiredWithoutProductsNestedInput } from '../category/category-update-one-required-without-products-nested.input';
import { ProductImageUpdateManyWithoutProductNestedInput } from '../product-image/product-image-update-many-without-product-nested.input';

@InputType()
export class ProductUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumProductStatusFieldUpdateOperationsInput;

    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: EnumProductSizeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    calories?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    preparation_time?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BranchUpdateOneRequiredWithoutProductNestedInput, {nullable:true})
    Branch?: BranchUpdateOneRequiredWithoutProductNestedInput;

    @Field(() => CategoryUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    Category?: CategoryUpdateOneRequiredWithoutProductsNestedInput;

    @Field(() => ProductImageUpdateManyWithoutProductNestedInput, {nullable:true})
    ProductImages?: ProductImageUpdateManyWithoutProductNestedInput;
}
