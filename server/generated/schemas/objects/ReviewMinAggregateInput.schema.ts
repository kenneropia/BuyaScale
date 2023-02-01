import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    creatorId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    note: z.literal(true).optional(),
    rating: z.literal(true).optional(),
  })
  .strict();

export const ReviewMinAggregateInputObjectSchema = Schema;
