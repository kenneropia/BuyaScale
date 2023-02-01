import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryMinAggregateInputType> = z
  .object({
    title: z.literal(true).optional(),
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const CategoryMinAggregateInputObjectSchema = Schema;
