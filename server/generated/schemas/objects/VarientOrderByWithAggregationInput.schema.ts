import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VarientCountOrderByAggregateInputObjectSchema } from './VarientCountOrderByAggregateInput.schema';
import { VarientMaxOrderByAggregateInputObjectSchema } from './VarientMaxOrderByAggregateInput.schema';
import { VarientMinOrderByAggregateInputObjectSchema } from './VarientMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    previewImage: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => VarientCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => VarientMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VarientMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const VarientOrderByWithAggregationInputObjectSchema = Schema;
