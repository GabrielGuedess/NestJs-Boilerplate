import { registerEnumType } from '@nestjs/graphql';

export enum ProductSize {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE"
}


registerEnumType(ProductSize, { name: 'ProductSize', description: undefined })
