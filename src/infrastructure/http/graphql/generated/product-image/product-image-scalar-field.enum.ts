import { registerEnumType } from '@nestjs/graphql';

export enum ProductImageScalarFieldEnum {
    id = "id",
    path = "path",
    active = "active",
    created_at = "created_at",
    updated_at = "updated_at",
    product_id = "product_id"
}


registerEnumType(ProductImageScalarFieldEnum, { name: 'ProductImageScalarFieldEnum', description: undefined })
