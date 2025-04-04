import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductStatus } from '../prisma/product-status.enum';
import { ProductSize } from '../prisma/product-size.enum';
import { ProductImageUncheckedCreateNestedManyWithoutProductInput } from '../product-image/product-image-unchecked-create-nested-many-without-product.input';

@InputType()
export class ProductUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => ProductStatus, {nullable:false})
    status!: keyof typeof ProductStatus;

    @Field(() => ProductSize, {nullable:true})
    size?: keyof typeof ProductSize;

    @Field(() => Int, {nullable:true})
    calories?: number;

    @Field(() => Int, {nullable:false})
    preparation_time!: number;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    branch_id!: string;

    @Field(() => String, {nullable:false})
    category_id!: string;

    @Field(() => ProductImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    ProductImages?: ProductImageUncheckedCreateNestedManyWithoutProductInput;
}
