import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    name = "name",
    price = "price",
    status = "status",
    size = "size",
    calories = "calories",
    preparation_time = "preparation_time",
    active = "active",
    created_at = "created_at",
    updated_at = "updated_at",
    branch_id = "branch_id",
    category_id = "category_id"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
