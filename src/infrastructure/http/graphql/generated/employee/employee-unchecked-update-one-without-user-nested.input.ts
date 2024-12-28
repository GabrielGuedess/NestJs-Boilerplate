import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutUserInput } from './employee-create-without-user.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutUserInput } from './employee-create-or-connect-without-user.input';
import { EmployeeUpsertWithoutUserInput } from './employee-upsert-without-user.input';
import { EmployeeWhereInput } from './employee-where.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateToOneWithWhereWithoutUserInput } from './employee-update-to-one-with-where-without-user.input';

@InputType()
export class EmployeeUncheckedUpdateOneWithoutUserNestedInput {

    @Field(() => EmployeeCreateWithoutUserInput, {nullable:true})
    @Type(() => EmployeeCreateWithoutUserInput)
    create?: EmployeeCreateWithoutUserInput;

    @Field(() => EmployeeCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutUserInput)
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput;

    @Field(() => EmployeeUpsertWithoutUserInput, {nullable:true})
    @Type(() => EmployeeUpsertWithoutUserInput)
    upsert?: EmployeeUpsertWithoutUserInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    disconnect?: EmployeeWhereInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    delete?: EmployeeWhereInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Prisma.AtLeast<EmployeeWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => EmployeeUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => EmployeeUpdateToOneWithWhereWithoutUserInput)
    update?: EmployeeUpdateToOneWithWhereWithoutUserInput;
}
