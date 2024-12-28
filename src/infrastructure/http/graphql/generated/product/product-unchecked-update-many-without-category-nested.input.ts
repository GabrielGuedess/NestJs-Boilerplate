import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCategoryInput } from './product-create-without-category.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutCategoryInput } from './product-create-or-connect-without-category.input';
import { ProductUpsertWithWhereUniqueWithoutCategoryInput } from './product-upsert-with-where-unique-without-category.input';
import { ProductCreateManyCategoryInputEnvelope } from './product-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutCategoryInput } from './product-update-with-where-unique-without-category.input';
import { ProductUpdateManyWithWhereWithoutCategoryInput } from './product-update-many-with-where-without-category.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutCategoryNestedInput {

    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutCategoryInput)
    create?: Array<ProductCreateWithoutCategoryInput>;

    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => ProductCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCategoryInputEnvelope)
    createMany?: ProductCreateManyCategoryInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
