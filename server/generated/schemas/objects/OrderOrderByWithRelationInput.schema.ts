import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';
import { VarientOrderByWithRelationInputObjectSchema } from './VarientOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    quality: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    creator: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    creatorId: z.lazy(() => SortOrderSchema).optional(),
    product: z
      .lazy(() => ProductOrderByWithRelationInputObjectSchema)
      .optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    varient: z
      .lazy(() => VarientOrderByWithRelationInputObjectSchema)
      .optional(),
    varientId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const OrderOrderByWithRelationInputObjectSchema = Schema;
