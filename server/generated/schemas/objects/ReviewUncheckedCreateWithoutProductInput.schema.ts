import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    creatorId: z.string().optional().nullable(),
    note: z.string(),
    rating: z.number(),
  })
  .strict();

export const ReviewUncheckedCreateWithoutProductInputObjectSchema = Schema;
