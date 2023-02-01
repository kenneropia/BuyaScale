import { z } from 'zod';
import { UserCreateNestedOneWithoutProductsInputObjectSchema } from './UserCreateNestedOneWithoutProductsInput.schema';
import { VarientCreateNestedManyWithoutProductInputObjectSchema } from './VarientCreateNestedManyWithoutProductInput.schema';
import { CartCreateNestedManyWithoutProductInputObjectSchema } from './CartCreateNestedManyWithoutProductInput.schema';
import { OrderCreateNestedManyWithoutProductInputObjectSchema } from './OrderCreateNestedManyWithoutProductInput.schema';
import { ReviewCreateNestedManyWithoutProductInputObjectSchema } from './ReviewCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateWithoutCategoryInput> = z
  .object({
    id: z.string().optional(),
    creator: z
      .lazy(() => UserCreateNestedOneWithoutProductsInputObjectSchema)
      .optional(),
    previewImage: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    quantityLeft: z.number(),
    note: z.string(),
    varients: z
      .lazy(() => VarientCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    cart: z
      .lazy(() => CartCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    price: z.number(),
    orders: z
      .lazy(() => OrderCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    reviews: z
      .lazy(() => ReviewCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductCreateWithoutCategoryInputObjectSchema = Schema;
