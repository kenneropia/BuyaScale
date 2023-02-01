import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserAddressCountOrderByAggregateInputObjectSchema } from './UserAddressCountOrderByAggregateInput.schema';
import { UserAddressMaxOrderByAggregateInputObjectSchema } from './UserAddressMaxOrderByAggregateInput.schema';
import { UserAddressMinOrderByAggregateInputObjectSchema } from './UserAddressMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserAddressOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => UserAddressCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => UserAddressMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => UserAddressMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserAddressOrderByWithAggregationInputObjectSchema = Schema;
