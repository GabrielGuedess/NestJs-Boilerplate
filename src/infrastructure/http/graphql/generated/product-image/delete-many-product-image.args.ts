import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductImageWhereInput } from './product-image-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProductImageArgs {

    @Field(() => ProductImageWhereInput, {nullable:true})
    @Type(() => ProductImageWhereInput)
    where?: ProductImageWhereInput;
}
