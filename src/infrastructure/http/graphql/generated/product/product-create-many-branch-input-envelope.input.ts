import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyBranchInput } from './product-create-many-branch.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyBranchInputEnvelope {

    @Field(() => [ProductCreateManyBranchInput], {nullable:false})
    @Type(() => ProductCreateManyBranchInput)
    data!: Array<ProductCreateManyBranchInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
