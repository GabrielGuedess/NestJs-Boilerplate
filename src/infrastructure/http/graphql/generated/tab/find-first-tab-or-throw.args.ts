import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TabWhereInput } from './tab-where.input';
import { Type } from 'class-transformer';
import { TabOrderByWithRelationInput } from './tab-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TabWhereUniqueInput } from './tab-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TabScalarFieldEnum } from './tab-scalar-field.enum';

@ArgsType()
export class FindFirstTabOrThrowArgs {

    @Field(() => TabWhereInput, {nullable:true})
    @Type(() => TabWhereInput)
    where?: TabWhereInput;

    @Field(() => [TabOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TabOrderByWithRelationInput>;

    @Field(() => TabWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TabWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TabScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TabScalarFieldEnum>;
}
