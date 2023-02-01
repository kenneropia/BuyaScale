import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { VarientRelationFilterObjectSchema } from './VarientRelationFilter.schema';
import { VarientWhereInputObjectSchema } from './VarientWhereInput.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CartWhereInputObjectSchema),
        z.lazy(() => CartWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CartWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CartWhereInputObjectSchema),
        z.lazy(() => CartWhereInputObjectSchema).array(),
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
    varient: z
      .union([
        z.lazy(() => VarientRelationFilterObjectSchema),
        z.lazy(() => VarientWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    varientId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    price: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const CartWhereInputObjectSchema = Schema;
