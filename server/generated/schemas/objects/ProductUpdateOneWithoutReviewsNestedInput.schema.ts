import { z } from 'zod';
import { ProductCreateWithoutReviewsInputObjectSchema } from './ProductCreateWithoutReviewsInput.schema';
import { ProductUncheckedCreateWithoutReviewsInputObjectSchema } from './ProductUncheckedCreateWithoutReviewsInput.schema';
import { ProductCreateOrConnectWithoutReviewsInputObjectSchema } from './ProductCreateOrConnectWithoutReviewsInput.schema';
import { ProductUpsertWithoutReviewsInputObjectSchema } from './ProductUpsertWithoutReviewsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutReviewsInputObjectSchema } from './ProductUpdateWithoutReviewsInput.schema';
import { ProductUncheckedUpdateWithoutReviewsInputObjectSchema } from './ProductUncheckedUpdateWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneWithoutReviewsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutReviewsInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutReviewsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductCreateOrConnectWithoutReviewsInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => ProductUpsertWithoutReviewsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProductUpdateWithoutReviewsInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutReviewsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductUpdateOneWithoutReviewsNestedInputObjectSchema = Schema;
