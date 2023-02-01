import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    previewImage: z.literal(true).optional(),
  })
  .strict();

export const VarientMinAggregateInputObjectSchema = Schema;
