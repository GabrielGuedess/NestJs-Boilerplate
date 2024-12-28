import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutBranchInput } from './product-create-without-branch.input';

@InputType()
export class ProductCreateOrConnectWithoutBranchInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutBranchInput, {nullable:false})
    @Type(() => ProductCreateWithoutBranchInput)
    create!: ProductCreateWithoutBranchInput;
}
