import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BranchCreateWithoutTableInput } from './branch-create-without-table.input';
import { Type } from 'class-transformer';
import { BranchCreateOrConnectWithoutTableInput } from './branch-create-or-connect-without-table.input';
import { BranchUpsertWithoutTableInput } from './branch-upsert-without-table.input';
import { Prisma } from '@prisma/client';
import { BranchWhereUniqueInput } from './branch-where-unique.input';
import { BranchUpdateToOneWithWhereWithoutTableInput } from './branch-update-to-one-with-where-without-table.input';

@InputType()
export class BranchUpdateOneRequiredWithoutTableNestedInput {

    @Field(() => BranchCreateWithoutTableInput, {nullable:true})
    @Type(() => BranchCreateWithoutTableInput)
    create?: BranchCreateWithoutTableInput;

    @Field(() => BranchCreateOrConnectWithoutTableInput, {nullable:true})
    @Type(() => BranchCreateOrConnectWithoutTableInput)
    connectOrCreate?: BranchCreateOrConnectWithoutTableInput;

    @Field(() => BranchUpsertWithoutTableInput, {nullable:true})
    @Type(() => BranchUpsertWithoutTableInput)
    upsert?: BranchUpsertWithoutTableInput;

    @Field(() => BranchWhereUniqueInput, {nullable:true})
    @Type(() => BranchWhereUniqueInput)
    connect?: Prisma.AtLeast<BranchWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => BranchUpdateToOneWithWhereWithoutTableInput, {nullable:true})
    @Type(() => BranchUpdateToOneWithWhereWithoutTableInput)
    update?: BranchUpdateToOneWithWhereWithoutTableInput;
}
