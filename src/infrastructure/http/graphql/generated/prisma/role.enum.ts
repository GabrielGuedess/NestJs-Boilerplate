import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}


registerEnumType(Role, { name: 'Role', description: undefined })
