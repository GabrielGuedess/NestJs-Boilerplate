import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductImageWhereInput } from './product-image-where.input';
import { Type } from 'class-transformer';
import { ProductImageOrderByWithAggregationInput } from './product-image-order-by-with-aggregation.input';
import { ProductImageScalarFieldEnum } from './product-image-scalar-field.enum';
import { ProductImageScalarWhereWithAggregatesInput } from './product-image-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductImageCountAggregateInput } from './product-image-count-aggregate.input';
import { ProductImageMinAggregateInput } from './product-image-min-aggregate.input';
import { ProductImageMaxAggregateInput } from './product-image-max-aggregate.input';

@ArgsType()
export class ProductImageGroupByArgs {

    @Field(() => ProductImageWhereInput, {nullable:true})
    @Type(() => ProductImageWhereInput)
    where?: ProductImageWhereInput;

    @Field(() => [ProductImageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductImageOrderByWithAggregationInput>;

    @Field(() => [ProductImageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductImageScalarFieldEnum>;

    @Field(() => ProductImageScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductImageScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductImageCountAggregateInput, {nullable:true})
    _count?: ProductImageCountAggregateInput;

    @Field(() => ProductImageMinAggregateInput, {nullable:true})
    _min?: ProductImageMinAggregateInput;

    @Field(() => ProductImageMaxAggregateInput, {nullable:true})
    _max?: ProductImageMaxAggregateInput;
}
