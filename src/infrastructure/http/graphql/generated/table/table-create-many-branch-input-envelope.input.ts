import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableCreateManyBranchInput } from './table-create-many-branch.input';
import { Type } from 'class-transformer';

@InputType()
export class TableCreateManyBranchInputEnvelope {

    @Field(() => [TableCreateManyBranchInput], {nullable:false})
    @Type(() => TableCreateManyBranchInput)
    data!: Array<TableCreateManyBranchInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
