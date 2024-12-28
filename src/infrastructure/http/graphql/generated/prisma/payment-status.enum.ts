import { registerEnumType } from '@nestjs/graphql';

export enum PaymentStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    CANCELLED = "CANCELLED",
    REFUNDED = "REFUNDED"
}


registerEnumType(PaymentStatus, { name: 'PaymentStatus', description: undefined })
