import { z } from 'zod';
import { VarientUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './VarientUncheckedCreateNestedManyWithoutProductInput.schema';
import { OrderUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutProductInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateWithoutCartInput> = z
  .object({
    id: z.string().optional(),
    creatorId: z.string().optional().nullable(),
    categoryId: z.string().optional().nullable(),
    previewImage: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    quantityLeft: z.number(),
    note: z.string(),
    varients: z
      .lazy(
        () => VarientUncheckedCreateNestedManyWithoutProductInputObjectSchema,
      )
      .optional(),
    price: z.number(),
    orders: z
      .lazy(() => OrderUncheckedCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    reviews: z
      .lazy(
        () => ReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductUncheckedCreateWithoutCartInputObjectSchema = Schema;
