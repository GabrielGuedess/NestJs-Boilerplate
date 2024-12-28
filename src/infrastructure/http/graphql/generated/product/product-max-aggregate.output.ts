import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductStatus } from '../prisma/product-status.enum';
import { ProductSize } from '../prisma/product-size.enum';

@ObjectType()
export class ProductMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => ProductStatus, {nullable:true})
    status?: keyof typeof ProductStatus;

    @Field(() => ProductSize, {nullable:true})
    size?: keyof typeof ProductSize;

    @Field(() => Int, {nullable:true})
    calories?: number;

    @Field(() => Int, {nullable:true})
    preparation_time?: number;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    branch_id?: string;

    @Field(() => String, {nullable:true})
    category_id?: string;
}
