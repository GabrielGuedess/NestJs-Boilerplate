import { registerEnumType } from '@nestjs/graphql';

export enum ProductStatus {
    AVAILABLE = "AVAILABLE",
    UNAVAILABLE = "UNAVAILABLE"
}


registerEnumType(ProductStatus, { name: 'ProductStatus', description: undefined })
