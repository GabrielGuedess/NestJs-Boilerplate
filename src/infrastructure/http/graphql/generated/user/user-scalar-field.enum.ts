import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    full_name = "full_name",
    document = "document",
    avatar_url = "avatar_url",
    role = "role",
    validated = "validated",
    active = "active",
    created_at = "created_at",
    updated_at = "updated_at",
    password = "password"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
