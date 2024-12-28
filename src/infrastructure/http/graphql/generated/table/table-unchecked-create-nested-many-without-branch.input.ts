import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableCreateWithoutBranchInput } from './table-create-without-branch.input';
import { Type } from 'class-transformer';
import { TableCreateOrConnectWithoutBranchInput } from './table-create-or-connect-without-branch.input';
import { TableCreateManyBranchInputEnvelope } from './table-create-many-branch-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TableWhereUniqueInput } from './table-where-unique.input';

@InputType()
export class TableUncheckedCreateNestedManyWithoutBranchInput {

    @Field(() => [TableCreateWithoutBranchInput], {nullable:true})
    @Type(() => TableCreateWithoutBranchInput)
    create?: Array<TableCreateWithoutBranchInput>;

    @Field(() => [TableCreateOrConnectWithoutBranchInput], {nullable:true})
    @Type(() => TableCreateOrConnectWithoutBranchInput)
    connectOrCreate?: Array<TableCreateOrConnectWithoutBranchInput>;

    @Field(() => TableCreateManyBranchInputEnvelope, {nullable:true})
    @Type(() => TableCreateManyBranchInputEnvelope)
    createMany?: TableCreateManyBranchInputEnvelope;

    @Field(() => [TableWhereUniqueInput], {nullable:true})
    @Type(() => TableWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TableWhereUniqueInput, 'id'>>;
}
