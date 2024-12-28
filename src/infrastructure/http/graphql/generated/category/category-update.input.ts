import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BranchUpdateOneRequiredWithoutCategoryNestedInput } from '../branch/branch-update-one-required-without-category-nested.input';
import { ProductUpdateManyWithoutCategoryNestedInput } from '../product/product-update-many-without-category-nested.input';

@InputType()
export class CategoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BranchUpdateOneRequiredWithoutCategoryNestedInput, {nullable:true})
    Branch?: BranchUpdateOneRequiredWithoutCategoryNestedInput;

    @Field(() => ProductUpdateManyWithoutCategoryNestedInput, {nullable:true})
    Products?: ProductUpdateManyWithoutCategoryNestedInput;
}
