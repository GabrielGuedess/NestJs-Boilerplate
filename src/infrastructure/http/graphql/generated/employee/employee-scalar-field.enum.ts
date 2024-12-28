import { registerEnumType } from '@nestjs/graphql';

export enum EmployeeScalarFieldEnum {
    id = "id",
    role = "role",
    active = "active",
    created_at = "created_at",
    updated_at = "updated_at",
    user_id = "user_id",
    branch_id = "branch_id"
}


registerEnumType(EmployeeScalarFieldEnum, { name: 'EmployeeScalarFieldEnum', description: undefined })
