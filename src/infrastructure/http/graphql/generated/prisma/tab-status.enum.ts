import { registerEnumType } from '@nestjs/graphql';

export enum TabStatus {
    OPEN = "OPEN",
    CLOSED = "CLOSED"
}


registerEnumType(TabStatus, { name: 'TabStatus', description: undefined })
