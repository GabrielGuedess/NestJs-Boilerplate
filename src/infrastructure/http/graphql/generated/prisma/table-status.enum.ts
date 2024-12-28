import { registerEnumType } from '@nestjs/graphql';

export enum TableStatus {
    AVAILABLE = "AVAILABLE",
    UNAVAILABLE = "UNAVAILABLE"
}


registerEnumType(TableStatus, { name: 'TableStatus', description: undefined })
