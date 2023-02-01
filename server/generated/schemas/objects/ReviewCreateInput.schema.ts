import { z } from 'zod';
import { UserCreateNestedOneWithoutReviewsInputObjectSchema } from './UserCreateNestedOneWithoutReviewsInput.schema';
import { ProductCreateNestedOneWithoutReviewsInputObjectSchema } from './ProductCreateNestedOneWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateInput> = z
  .object({
    id: z.string().optional(),
    creator: z
      .lazy(() => UserCreateNestedOneWithoutReviewsInputObjectSchema)
      .optional(),
    product: z
      .lazy(() => ProductCreateNestedOneWithoutReviewsInputObjectSchema)
      .optional(),
    note: z.string(),
    rating: z.number(),
  })
  .strict();

export const ReviewCreateInputObjectSchema = Schema;
