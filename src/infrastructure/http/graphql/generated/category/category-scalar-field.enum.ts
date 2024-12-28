import { registerEnumType } from '@nestjs/graphql';

export enum CategoryScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    active = "active",
    created_at = "created_at",
    updated_at = "updated_at",
    branch_id = "branch_id"
}


registerEnumType(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum', description: undefined })
