import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from './role.enum';

@InputType()
export class EnumRoleFieldUpdateOperationsInput {

    @Field(() => Role, {nullable:true})
    set?: keyof typeof Role;
}
