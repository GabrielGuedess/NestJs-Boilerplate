import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BranchOrderByWithRelationInput } from '../branch/branch-order-by-with-relation.input';
import { CategoryOrderByWithRelationInput } from '../category/category-order-by-with-relation.input';
import { ProductImageOrderByRelationAggregateInput } from '../product-image/product-image-order-by-relation-aggregate.input';

@InputType()
export class ProductOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    size?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    calories?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    preparation_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    branch_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => BranchOrderByWithRelationInput, {nullable:true})
    Branch?: BranchOrderByWithRelationInput;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    Category?: CategoryOrderByWithRelationInput;

    @Field(() => ProductImageOrderByRelationAggregateInput, {nullable:true})
    ProductImages?: ProductImageOrderByRelationAggregateInput;
}
