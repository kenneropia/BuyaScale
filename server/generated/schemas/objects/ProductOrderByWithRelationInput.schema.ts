import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { CategoryOrderByWithRelationInputObjectSchema } from './CategoryOrderByWithRelationInput.schema';
import { VarientOrderByRelationAggregateInputObjectSchema } from './VarientOrderByRelationAggregateInput.schema';
import { CartOrderByRelationAggregateInputObjectSchema } from './CartOrderByRelationAggregateInput.schema';
import { OrderOrderByRelationAggregateInputObjectSchema } from './OrderOrderByRelationAggregateInput.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    creator: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    creatorId: z.lazy(() => SortOrderSchema).optional(),
    category: z
      .lazy(() => CategoryOrderByWithRelationInputObjectSchema)
      .optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    previewImage: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    quantityLeft: z.lazy(() => SortOrderSchema).optional(),
    note: z.lazy(() => SortOrderSchema).optional(),
    varients: z
      .lazy(() => VarientOrderByRelationAggregateInputObjectSchema)
      .optional(),
    cart: z
      .lazy(() => CartOrderByRelationAggregateInputObjectSchema)
      .optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    orders: z
      .lazy(() => OrderOrderByRelationAggregateInputObjectSchema)
      .optional(),
    reviews: z
      .lazy(() => ReviewOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductOrderByWithRelationInputObjectSchema = Schema;
