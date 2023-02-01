import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderAvgAggregateInputType> = z
  .object({
    quality: z.literal(true).optional(),
    price: z.literal(true).optional(),
  })
  .strict();

export const OrderAvgAggregateInputObjectSchema = Schema;
