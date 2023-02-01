import { z } from 'zod';
import { ReviewCreatorIdProductIdCompoundUniqueInputObjectSchema } from './ReviewCreatorIdProductIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    creatorId_productId: z
      .lazy(() => ReviewCreatorIdProductIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReviewWhereUniqueInputObjectSchema = Schema;
