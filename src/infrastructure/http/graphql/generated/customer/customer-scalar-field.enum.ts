import { registerEnumType } from '@nestjs/graphql';

export enum CustomerScalarFieldEnum {
    id = "id",
    cnpj = "cnpj",
    company_name = "company_name",
    fantasy_name = "fantasy_name",
    active = "active",
    created_at = "created_at",
    updated_at = "updated_at",
    user_id = "user_id"
}


registerEnumType(CustomerScalarFieldEnum, { name: 'CustomerScalarFieldEnum', description: undefined })
