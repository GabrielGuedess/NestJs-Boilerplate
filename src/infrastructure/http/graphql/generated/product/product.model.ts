import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductStatus } from '../prisma/product-status.enum';
import { ProductSize } from '../prisma/product-size.enum';
import { Branch } from '../branch/branch.model';
import { Category } from '../category/category.model';
import { ProductImage } from '../product-image/product-image.model';
import { ProductCount } from './product-count.output';

@ObjectType()
export class Product {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => ProductStatus, {nullable:false})
    status!: keyof typeof ProductStatus;

    @Field(() => ProductSize, {nullable:false,defaultValue:'MEDIUM'})
    size!: keyof typeof ProductSize;

    @Field(() => Int, {nullable:true})
    calories!: number | null;

    @Field(() => Int, {nullable:false})
    preparation_time!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    branch_id!: string;

    @Field(() => String, {nullable:false})
    category_id!: string;

    @Field(() => Branch, {nullable:false})
    Branch?: Branch;

    @Field(() => Category, {nullable:false})
    Category?: Category;

    @Field(() => [ProductImage], {nullable:true})
    ProductImages?: Array<ProductImage>;

    @Field(() => ProductCount, {nullable:false})
    _count?: ProductCount;
}
