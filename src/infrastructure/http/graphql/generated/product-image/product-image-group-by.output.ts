import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductImageCountAggregate } from './product-image-count-aggregate.output';
import { ProductImageMinAggregate } from './product-image-min-aggregate.output';
import { ProductImageMaxAggregate } from './product-image-max-aggregate.output';

@ObjectType()
export class ProductImageGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    product_id!: string;

    @Field(() => ProductImageCountAggregate, {nullable:true})
    _count?: ProductImageCountAggregate;

    @Field(() => ProductImageMinAggregate, {nullable:true})
    _min?: ProductImageMinAggregate;

    @Field(() => ProductImageMaxAggregate, {nullable:true})
    _max?: ProductImageMaxAggregate;
}
