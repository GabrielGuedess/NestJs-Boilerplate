import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TableStatus } from '../prisma/table-status.enum';

@ObjectType()
export class TableMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    capacity?: number;

    @Field(() => TableStatus, {nullable:true})
    status?: keyof typeof TableStatus;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => Date, {nullable:true})
    occupied_since?: Date | string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    branch_id?: string;
}
