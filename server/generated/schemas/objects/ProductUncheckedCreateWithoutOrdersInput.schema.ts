import { z } from 'zod';
import { VarientUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './VarientUncheckedCreateNestedManyWithoutProductInput.schema';
import { CartUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './CartUncheckedCreateNestedManyWithoutProductInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateWithoutOrdersInput> = z
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
    cart: z
      .lazy(() => CartUncheckedCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    price: z.number(),
    reviews: z
      .lazy(
        () => ReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductUncheckedCreateWithoutOrdersInputObjectSchema = Schema;
