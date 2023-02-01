import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    creatorId: z.literal(true).optional(),
    categoryId: z.literal(true).optional(),
    previewImage: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    title: z.literal(true).optional(),
    quantityLeft: z.literal(true).optional(),
    note: z.literal(true).optional(),
    price: z.literal(true).optional(),
  })
  .strict();

export const ProductMinAggregateInputObjectSchema = Schema;
