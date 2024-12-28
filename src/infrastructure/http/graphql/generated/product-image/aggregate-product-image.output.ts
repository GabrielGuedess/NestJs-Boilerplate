import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductImageCountAggregate } from './product-image-count-aggregate.output';
import { ProductImageMinAggregate } from './product-image-min-aggregate.output';
import { ProductImageMaxAggregate } from './product-image-max-aggregate.output';

@ObjectType()
export class AggregateProductImage {

    @Field(() => ProductImageCountAggregate, {nullable:true})
    _count?: ProductImageCountAggregate;

    @Field(() => ProductImageMinAggregate, {nullable:true})
    _min?: ProductImageMinAggregate;

    @Field(() => ProductImageMaxAggregate, {nullable:true})
    _max?: ProductImageMaxAggregate;
}
