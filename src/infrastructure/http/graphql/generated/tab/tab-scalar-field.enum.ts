import { registerEnumType } from '@nestjs/graphql';

export enum TabScalarFieldEnum {
    id = "id",
    status = "status",
    value = "value",
    payment_method = "payment_method",
    observations = "observations",
    employee_tax = "employee_tax",
    discount = "discount",
    active = "active",
    created_at = "created_at",
    updated_at = "updated_at",
    table_id = "table_id"
}


registerEnumType(TabScalarFieldEnum, { name: 'TabScalarFieldEnum', description: undefined })
