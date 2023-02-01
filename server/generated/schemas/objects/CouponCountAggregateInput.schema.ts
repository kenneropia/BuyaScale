import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CouponCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    token: z.literal(true).optional(),
    expires: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const CouponCountAggregateInputObjectSchema = Schema;
