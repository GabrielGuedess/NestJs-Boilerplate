import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutProductImagesInput } from './product-create-without-product-images.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutProductImagesInput } from './product-create-or-connect-without-product-images.input';
import { ProductUpsertWithoutProductImagesInput } from './product-upsert-without-product-images.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutProductImagesInput } from './product-update-to-one-with-where-without-product-images.input';

@InputType()
export class ProductUpdateOneRequiredWithoutProductImagesNestedInput {

    @Field(() => ProductCreateWithoutProductImagesInput, {nullable:true})
    @Type(() => ProductCreateWithoutProductImagesInput)
    create?: ProductCreateWithoutProductImagesInput;

    @Field(() => ProductCreateOrConnectWithoutProductImagesInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductImagesInput)
    connectOrCreate?: ProductCreateOrConnectWithoutProductImagesInput;

    @Field(() => ProductUpsertWithoutProductImagesInput, {nullable:true})
    @Type(() => ProductUpsertWithoutProductImagesInput)
    upsert?: ProductUpsertWithoutProductImagesInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutProductImagesInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutProductImagesInput)
    update?: ProductUpdateToOneWithWhereWithoutProductImagesInput;
}
