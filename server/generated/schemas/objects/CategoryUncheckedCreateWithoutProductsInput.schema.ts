import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutProductsInput> = z
  .object({
    title: z.string(),
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const CategoryUncheckedCreateWithoutProductsInputObjectSchema = Schema;
