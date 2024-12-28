import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TableStatus } from '../prisma/table-status.enum';

@InputType()
export class TableCreateManyBranchInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    capacity!: number;

    @Field(() => TableStatus, {nullable:true})
    status?: keyof typeof TableStatus;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => Date, {nullable:true})
    occupied_since?: Date | string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
