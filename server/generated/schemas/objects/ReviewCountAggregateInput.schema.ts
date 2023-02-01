import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    creatorId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    note: z.literal(true).optional(),
    rating: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ReviewCountAggregateInputObjectSchema = Schema;
