import { z } from 'zod';
import { ProductCreateNestedOneWithoutReviewsInputObjectSchema } from './ProductCreateNestedOneWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateWithoutCreatorInput> = z
  .object({
    id: z.string().optional(),
    product: z
      .lazy(() => ProductCreateNestedOneWithoutReviewsInputObjectSchema)
      .optional(),
    note: z.string(),
    rating: z.number(),
  })
  .strict();

export const ReviewCreateWithoutCreatorInputObjectSchema = Schema;
