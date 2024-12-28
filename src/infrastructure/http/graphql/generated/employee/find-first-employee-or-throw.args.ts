import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeWhereInput } from './employee-where.input';
import { Type } from 'class-transformer';
import { EmployeeOrderByWithRelationInput } from './employee-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmployeeScalarFieldEnum } from './employee-scalar-field.enum';

@ArgsType()
export class FindFirstEmployeeOrThrowArgs {

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    where?: EmployeeWhereInput;

    @Field(() => [EmployeeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployeeOrderByWithRelationInput>;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EmployeeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmployeeScalarFieldEnum>;
}
