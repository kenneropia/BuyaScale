import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderSumAggregateInputType> = z
  .object({
    quality: z.literal(true).optional(),
    price: z.literal(true).optional(),
  })
  .strict();

export const OrderSumAggregateInputObjectSchema = Schema;
