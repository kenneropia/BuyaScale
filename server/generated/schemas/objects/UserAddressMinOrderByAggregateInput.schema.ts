import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserAddressMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    homeIdNumber: z.lazy(() => SortOrderSchema).optional(),
    closestLandmark: z.lazy(() => SortOrderSchema).optional(),
    street: z.lazy(() => SortOrderSchema).optional(),
    lga: z.lazy(() => SortOrderSchema).optional(),
    postalCode: z.lazy(() => SortOrderSchema).optional(),
    town: z.lazy(() => SortOrderSchema).optional(),
    note: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserAddressMinOrderByAggregateInputObjectSchema = Schema;
