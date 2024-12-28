import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutBranchInput } from './product-update-without-branch.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutBranchInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutBranchInput, {nullable:false})
    @Type(() => ProductUpdateWithoutBranchInput)
    data!: ProductUpdateWithoutBranchInput;
}
