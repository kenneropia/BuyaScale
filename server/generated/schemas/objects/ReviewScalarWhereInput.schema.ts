import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReviewScalarWhereInputObjectSchema),
        z.lazy(() => ReviewScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReviewScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReviewScalarWhereInputObjectSchema),
        z.lazy(() => ReviewScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    creatorId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    productId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    note: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    rating: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const ReviewScalarWhereInputObjectSchema = Schema;
