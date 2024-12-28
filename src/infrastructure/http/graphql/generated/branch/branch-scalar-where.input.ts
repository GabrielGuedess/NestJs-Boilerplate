import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BranchScalarWhereInput {

    @Field(() => [BranchScalarWhereInput], {nullable:true})
    AND?: Array<BranchScalarWhereInput>;

    @Field(() => [BranchScalarWhereInput], {nullable:true})
    OR?: Array<BranchScalarWhereInput>;

    @Field(() => [BranchScalarWhereInput], {nullable:true})
    NOT?: Array<BranchScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    cnpj?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    zip_code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address_number?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address_complement?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address_neighborhood?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    state?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    branch_name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UuidFilter, {nullable:true})
    customer_id?: UuidFilter;
}
