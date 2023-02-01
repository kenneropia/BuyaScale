import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserAddressOrderByWithRelationInputObjectSchema } from './UserAddressOrderByWithRelationInput.schema';
import { ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema';
import { CartOrderByRelationAggregateInputObjectSchema } from './CartOrderByRelationAggregateInput.schema';
import { OrderOrderByRelationAggregateInputObjectSchema } from './OrderOrderByRelationAggregateInput.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    fullName: z.lazy(() => SortOrderSchema).optional(),
    passwordHash: z.lazy(() => SortOrderSchema).optional(),
    userAddress: z
      .lazy(() => UserAddressOrderByWithRelationInputObjectSchema)
      .optional(),
    userAddressId: z.lazy(() => SortOrderSchema).optional(),
    products: z
      .lazy(() => ProductOrderByRelationAggregateInputObjectSchema)
      .optional(),
    cartItems: z
      .lazy(() => CartOrderByRelationAggregateInputObjectSchema)
      .optional(),
    orders: z
      .lazy(() => OrderOrderByRelationAggregateInputObjectSchema)
      .optional(),
    reviews: z
      .lazy(() => ReviewOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
