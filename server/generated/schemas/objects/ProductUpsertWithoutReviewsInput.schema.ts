import { z } from 'zod';
import { ProductUpdateWithoutReviewsInputObjectSchema } from './ProductUpdateWithoutReviewsInput.schema';
import { ProductUncheckedUpdateWithoutReviewsInputObjectSchema } from './ProductUncheckedUpdateWithoutReviewsInput.schema';
import { ProductCreateWithoutReviewsInputObjectSchema } from './ProductCreateWithoutReviewsInput.schema';
import { ProductUncheckedCreateWithoutReviewsInputObjectSchema } from './ProductUncheckedCreateWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutReviewsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutReviewsInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutReviewsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutReviewsInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutReviewsInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutReviewsInputObjectSchema = Schema;
