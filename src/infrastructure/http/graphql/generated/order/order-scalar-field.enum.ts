import { registerEnumType } from '@nestjs/graphql';

export enum OrderScalarFieldEnum {
    id = "id",
    status = "status",
    total_price = "total_price",
    observations = "observations",
    payment_status = "payment_status",
    payment_date = "payment_date",
    finished_at = "finished_at",
    active = "active",
    created_at = "created_at",
    updated_at = "updated_at",
    tab_id = "tab_id"
}


registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum', description: undefined })
