import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { Type } from 'class-transformer';
import { TableCreateWithoutBranchInput } from './table-create-without-branch.input';

@InputType()
export class TableCreateOrConnectWithoutBranchInput {

    @Field(() => TableWhereUniqueInput, {nullable:false})
    @Type(() => TableWhereUniqueInput)
    where!: Prisma.AtLeast<TableWhereUniqueInput, 'id'>;

    @Field(() => TableCreateWithoutBranchInput, {nullable:false})
    @Type(() => TableCreateWithoutBranchInput)
    create!: TableCreateWithoutBranchInput;
}
