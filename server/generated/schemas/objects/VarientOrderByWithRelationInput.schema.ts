import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';
import { OrderOrderByRelationAggregateInputObjectSchema } from './OrderOrderByRelationAggregateInput.schema';
import { CartOrderByRelationAggregateInputObjectSchema } from './CartOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    product: z
      .lazy(() => ProductOrderByWithRelationInputObjectSchema)
      .optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    previewImage: z.lazy(() => SortOrderSchema).optional(),
    orders: z
      .lazy(() => OrderOrderByRelationAggregateInputObjectSchema)
      .optional(),
    carts: z
      .lazy(() => CartOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const VarientOrderByWithRelationInputObjectSchema = Schema;
