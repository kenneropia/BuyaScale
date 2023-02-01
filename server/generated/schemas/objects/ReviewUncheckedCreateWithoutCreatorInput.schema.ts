import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutCreatorInput> = z
  .object({
    id: z.string().optional(),
    productId: z.string().optional().nullable(),
    note: z.string(),
    rating: z.number(),
  })
  .strict();

export const ReviewUncheckedCreateWithoutCreatorInputObjectSchema = Schema;
