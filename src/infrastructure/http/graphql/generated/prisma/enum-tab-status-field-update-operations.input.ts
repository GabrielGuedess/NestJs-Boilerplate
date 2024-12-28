import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TabStatus } from './tab-status.enum';

@InputType()
export class EnumTabStatusFieldUpdateOperationsInput {

    @Field(() => TabStatus, {nullable:true})
    set?: keyof typeof TabStatus;
}
