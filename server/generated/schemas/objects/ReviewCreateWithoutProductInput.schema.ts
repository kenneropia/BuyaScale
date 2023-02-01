import { z } from 'zod';
import { UserCreateNestedOneWithoutReviewsInputObjectSchema } from './UserCreateNestedOneWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    creator: z
      .lazy(() => UserCreateNestedOneWithoutReviewsInputObjectSchema)
      .optional(),
    note: z.string(),
    rating: z.number(),
  })
  .strict();

export const ReviewCreateWithoutProductInputObjectSchema = Schema;
