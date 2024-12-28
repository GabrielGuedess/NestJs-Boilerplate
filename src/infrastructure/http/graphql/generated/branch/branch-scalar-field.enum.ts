import { registerEnumType } from '@nestjs/graphql';

export enum BranchScalarFieldEnum {
    id = "id",
    cnpj = "cnpj",
    zip_code = "zip_code",
    address = "address",
    address_number = "address_number",
    address_complement = "address_complement",
    address_neighborhood = "address_neighborhood",
    city = "city",
    state = "state",
    branch_name = "branch_name",
    active = "active",
    created_at = "created_at",
    updated_at = "updated_at",
    customer_id = "customer_id"
}


registerEnumType(BranchScalarFieldEnum, { name: 'BranchScalarFieldEnum', description: undefined })
