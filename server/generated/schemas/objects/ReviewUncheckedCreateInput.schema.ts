import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    creatorId: z.string().optional().nullable(),
    productId: z.string().optional().nullable(),
    note: z.string(),
    rating: z.number(),
  })
  .strict();

export const ReviewUncheckedCreateInputObjectSchema = Schema;
