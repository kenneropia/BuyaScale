import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutReviewsNestedInputObjectSchema } from './UserUpdateOneWithoutReviewsNestedInput.schema';
import { ProductUpdateOneWithoutReviewsNestedInputObjectSchema } from './ProductUpdateOneWithoutReviewsNestedInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    creator: z
      .lazy(() => UserUpdateOneWithoutReviewsNestedInputObjectSchema)
      .optional(),
    product: z
      .lazy(() => ProductUpdateOneWithoutReviewsNestedInputObjectSchema)
      .optional(),
    note: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    rating: z
      .union([
        z.number(),
        z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ReviewUpdateInputObjectSchema = Schema;
