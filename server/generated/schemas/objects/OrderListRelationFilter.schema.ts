import { z } from 'zod';
import { OrderWhereInputObjectSchema } from './OrderWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderListRelationFilter> = z
  .object({
    every: z.lazy(() => OrderWhereInputObjectSchema).optional(),
    some: z.lazy(() => OrderWhereInputObjectSchema).optional(),
    none: z.lazy(() => OrderWhereInputObjectSchema).optional(),
  })
  .strict();

export const OrderListRelationFilterObjectSchema = Schema;
