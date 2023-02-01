import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { OrderListRelationFilterObjectSchema } from './OrderListRelationFilter.schema';
import { CartListRelationFilterObjectSchema } from './CartListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VarientWhereInputObjectSchema),
        z.lazy(() => VarientWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VarientWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VarientWhereInputObjectSchema),
        z.lazy(() => VarientWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
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
    previewImage: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    orders: z.lazy(() => OrderListRelationFilterObjectSchema).optional(),
    carts: z.lazy(() => CartListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const VarientWhereInputObjectSchema = Schema;
