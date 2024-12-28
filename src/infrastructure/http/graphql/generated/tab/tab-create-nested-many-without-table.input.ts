import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabCreateWithoutTableInput } from './tab-create-without-table.input';
import { Type } from 'class-transformer';
import { TabCreateOrConnectWithoutTableInput } from './tab-create-or-connect-without-table.input';
import { TabCreateManyTableInputEnvelope } from './tab-create-many-table-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TabWhereUniqueInput } from './tab-where-unique.input';

@InputType()
export class TabCreateNestedManyWithoutTableInput {

    @Field(() => [TabCreateWithoutTableInput], {nullable:true})
    @Type(() => TabCreateWithoutTableInput)
    create?: Array<TabCreateWithoutTableInput>;

    @Field(() => [TabCreateOrConnectWithoutTableInput], {nullable:true})
    @Type(() => TabCreateOrConnectWithoutTableInput)
    connectOrCreate?: Array<TabCreateOrConnectWithoutTableInput>;

    @Field(() => TabCreateManyTableInputEnvelope, {nullable:true})
    @Type(() => TabCreateManyTableInputEnvelope)
    createMany?: TabCreateManyTableInputEnvelope;

    @Field(() => [TabWhereUniqueInput], {nullable:true})
    @Type(() => TabWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TabWhereUniqueInput, 'id'>>;
}
