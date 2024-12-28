import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Branch } from '../branch/branch.model';
import { Product } from '../product/product.model';
import { CategoryCount } from './category-count.output';

@ObjectType()
export class Category {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    branch_id!: string;

    @Field(() => Branch, {nullable:false})
    Branch?: Branch;

    @Field(() => [Product], {nullable:true})
    Products?: Array<Product>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}
