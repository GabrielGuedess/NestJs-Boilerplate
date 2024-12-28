import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchCreateWithoutProductInput } from './branch-create-without-product.input';
import { Type } from 'class-transformer';
import { BranchCreateOrConnectWithoutProductInput } from './branch-create-or-connect-without-product.input';
import { BranchUpsertWithoutProductInput } from './branch-upsert-without-product.input';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';
import { BranchUpdateToOneWithWhereWithoutProductInput } from './branch-update-to-one-with-where-without-product.input';

@InputType()
export class BranchUpdateOneRequiredWithoutProductNestedInput {

    @Field(() => BranchCreateWithoutProductInput, {nullable:true})
    @Type(() => BranchCreateWithoutProductInput)
    create?: BranchCreateWithoutProductInput;

    @Field(() => BranchCreateOrConnectWithoutProductInput, {nullable:true})
    @Type(() => BranchCreateOrConnectWithoutProductInput)
    connectOrCreate?: BranchCreateOrConnectWithoutProductInput;

    @Field(() => BranchUpsertWithoutProductInput, {nullable:true})
    @Type(() => BranchUpsertWithoutProductInput)
    upsert?: BranchUpsertWithoutProductInput;

    @Field(() => BranchWhereUniqueInput, {nullable:true})
    @Type(() => BranchWhereUniqueInput)
    connect?: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => BranchUpdateToOneWithWhereWithoutProductInput, {nullable:true})
    @Type(() => BranchUpdateToOneWithWhereWithoutProductInput)
    update?: BranchUpdateToOneWithWhereWithoutProductInput;
}
