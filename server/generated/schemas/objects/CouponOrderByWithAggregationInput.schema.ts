import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CouponCountOrderByAggregateInputObjectSchema } from './CouponCountOrderByAggregateInput.schema';
import { CouponMaxOrderByAggregateInputObjectSchema } from './CouponMaxOrderByAggregateInput.schema';
import { CouponMinOrderByAggregateInputObjectSchema } from './CouponMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CouponOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    token: z.lazy(() => SortOrderSchema).optional(),
    expires: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CouponCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => CouponMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CouponMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CouponOrderByWithAggregationInputObjectSchema = Schema;
