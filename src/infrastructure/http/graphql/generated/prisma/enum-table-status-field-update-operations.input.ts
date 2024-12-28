import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableStatus } from './table-status.enum';

@InputType()
export class EnumTableStatusFieldUpdateOperationsInput {

    @Field(() => TableStatus, {nullable:true})
    set?: keyof typeof TableStatus;
}
