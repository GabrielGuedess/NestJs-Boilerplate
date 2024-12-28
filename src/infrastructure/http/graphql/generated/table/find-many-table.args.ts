import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableWhereInput } from './table-where.input';
import { Type } from 'class-transformer';
import { TableOrderByWithRelationInput } from './table-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TableScalarFieldEnum } from './table-scalar-field.enum';

@ArgsType()
export class FindManyTableArgs {

    @Field(() => TableWhereInput, {nullable:true})
    @Type(() => TableWhereInput)
    where?: TableWhereInput;

    @Field(() => [TableOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TableOrderByWithRelationInput>;

    @Field(() => TableWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TableWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TableScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TableScalarFieldEnum>;
}
