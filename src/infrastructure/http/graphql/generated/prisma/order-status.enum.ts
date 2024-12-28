import { registerEnumType } from '@nestjs/graphql';

export enum OrderStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    PREPARING = "PREPARING",
    READY = "READY",
    SERVED = "SERVED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED"
}


registerEnumType(OrderStatus, { name: 'OrderStatus', description: undefined })
