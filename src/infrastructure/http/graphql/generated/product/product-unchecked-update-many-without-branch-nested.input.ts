import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutBranchInput } from './product-create-without-branch.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutBranchInput } from './product-create-or-connect-without-branch.input';
import { ProductUpsertWithWhereUniqueWithoutBranchInput } from './product-upsert-with-where-unique-without-branch.input';
import { ProductCreateManyBranchInputEnvelope } from './product-create-many-branch-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutBranchInput } from './product-update-with-where-unique-without-branch.input';
import { ProductUpdateManyWithWhereWithoutBranchInput } from './product-update-many-with-where-without-branch.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutBranchNestedInput {

    @Field(() => [ProductCreateWithoutBranchInput], {nullable:true})
    @Type(() => ProductCreateWithoutBranchInput)
    create?: Array<ProductCreateWithoutBranchInput>;

    @Field(() => [ProductCreateOrConnectWithoutBranchInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutBranchInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutBranchInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutBranchInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutBranchInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutBranchInput>;

    @Field(() => ProductCreateManyBranchInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyBranchInputEnvelope)
    createMany?: ProductCreateManyBranchInputEnvelope;

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

    @Field(() => [ProductUpdateWithWhereUniqueWithoutBranchInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutBranchInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutBranchInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutBranchInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutBranchInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutBranchInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
