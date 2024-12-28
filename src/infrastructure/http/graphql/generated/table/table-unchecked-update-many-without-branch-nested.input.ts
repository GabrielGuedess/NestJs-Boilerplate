import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableCreateWithoutBranchInput } from './table-create-without-branch.input';
import { Type } from 'class-transformer';
import { TableCreateOrConnectWithoutBranchInput } from './table-create-or-connect-without-branch.input';
import { TableUpsertWithWhereUniqueWithoutBranchInput } from './table-upsert-with-where-unique-without-branch.input';
import { TableCreateManyBranchInputEnvelope } from './table-create-many-branch-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { TableUpdateWithWhereUniqueWithoutBranchInput } from './table-update-with-where-unique-without-branch.input';
import { TableUpdateManyWithWhereWithoutBranchInput } from './table-update-many-with-where-without-branch.input';
import { TableScalarWhereInput } from './table-scalar-where.input';

@InputType()
export class TableUncheckedUpdateManyWithoutBranchNestedInput {

    @Field(() => [TableCreateWithoutBranchInput], {nullable:true})
    @Type(() => TableCreateWithoutBranchInput)
    create?: Array<TableCreateWithoutBranchInput>;

    @Field(() => [TableCreateOrConnectWithoutBranchInput], {nullable:true})
    @Type(() => TableCreateOrConnectWithoutBranchInput)
    connectOrCreate?: Array<TableCreateOrConnectWithoutBranchInput>;

    @Field(() => [TableUpsertWithWhereUniqueWithoutBranchInput], {nullable:true})
    @Type(() => TableUpsertWithWhereUniqueWithoutBranchInput)
    upsert?: Array<TableUpsertWithWhereUniqueWithoutBranchInput>;

    @Field(() => TableCreateManyBranchInputEnvelope, {nullable:true})
    @Type(() => TableCreateManyBranchInputEnvelope)
    createMany?: TableCreateManyBranchInputEnvelope;

    @Field(() => [TableWhereUniqueInput], {nullable:true})
    @Type(() => TableWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TableWhereUniqueInput, 'id'>>;

    @Field(() => [TableWhereUniqueInput], {nullable:true})
    @Type(() => TableWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TableWhereUniqueInput, 'id'>>;

    @Field(() => [TableWhereUniqueInput], {nullable:true})
    @Type(() => TableWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TableWhereUniqueInput, 'id'>>;

    @Field(() => [TableWhereUniqueInput], {nullable:true})
    @Type(() => TableWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TableWhereUniqueInput, 'id'>>;

    @Field(() => [TableUpdateWithWhereUniqueWithoutBranchInput], {nullable:true})
    @Type(() => TableUpdateWithWhereUniqueWithoutBranchInput)
    update?: Array<TableUpdateWithWhereUniqueWithoutBranchInput>;

    @Field(() => [TableUpdateManyWithWhereWithoutBranchInput], {nullable:true})
    @Type(() => TableUpdateManyWithWhereWithoutBranchInput)
    updateMany?: Array<TableUpdateManyWithWhereWithoutBranchInput>;

    @Field(() => [TableScalarWhereInput], {nullable:true})
    @Type(() => TableScalarWhereInput)
    deleteMany?: Array<TableScalarWhereInput>;
}
