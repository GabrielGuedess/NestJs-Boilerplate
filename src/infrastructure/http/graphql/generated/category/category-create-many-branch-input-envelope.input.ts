import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateManyBranchInput } from './category-create-many-branch.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryCreateManyBranchInputEnvelope {

    @Field(() => [CategoryCreateManyBranchInput], {nullable:false})
    @Type(() => CategoryCreateManyBranchInput)
    data!: Array<CategoryCreateManyBranchInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
