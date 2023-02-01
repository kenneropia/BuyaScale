import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReviewWhereInputObjectSchema),
        z.lazy(() => ReviewWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReviewWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReviewWhereInputObjectSchema),
        z.lazy(() => ReviewWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    creator: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    creatorId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema),
      ])
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

export const ReviewWhereInputObjectSchema = Schema;
