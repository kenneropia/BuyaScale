import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreatorIdProductIdCompoundUniqueInput> = z
  .object({
    creatorId: z.string(),
    productId: z.string(),
  })
  .strict();

export const ReviewCreatorIdProductIdCompoundUniqueInputObjectSchema = Schema;
