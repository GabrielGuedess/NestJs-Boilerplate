import { registerEnumType } from '@nestjs/graphql';

export enum TableScalarFieldEnum {
    id = "id",
    name = "name",
    capacity = "capacity",
    status = "status",
    location = "location",
    occupied_since = "occupied_since",
    active = "active",
    created_at = "created_at",
    updated_at = "updated_at",
    branch_id = "branch_id"
}


registerEnumType(TableScalarFieldEnum, { name: 'TableScalarFieldEnum', description: undefined })
