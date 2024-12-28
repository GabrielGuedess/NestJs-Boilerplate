import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutBranchInput } from './product-create-without-branch.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutBranchInput } from './product-create-or-connect-without-branch.input';
import { ProductCreateManyBranchInputEnvelope } from './product-create-many-branch-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutBranchInput {

    @Field(() => [ProductCreateWithoutBranchInput], {nullable:true})
    @Type(() => ProductCreateWithoutBranchInput)
    create?: Array<ProductCreateWithoutBranchInput>;

    @Field(() => [ProductCreateOrConnectWithoutBranchInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutBranchInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutBranchInput>;

    @Field(() => ProductCreateManyBranchInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyBranchInputEnvelope)
    createMany?: ProductCreateManyBranchInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
