import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    creatorId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    varientId: z.literal(true).optional(),
    price: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const CartCountAggregateInputObjectSchema = Schema;
