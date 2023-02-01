import { z } from 'zod';
import { UserCreateNestedOneWithoutCartItemsInputObjectSchema } from './UserCreateNestedOneWithoutCartItemsInput.schema';
import { ProductCreateNestedOneWithoutCartInputObjectSchema } from './ProductCreateNestedOneWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateWithoutVarientInput> = z
  .object({
    id: z.string().optional(),
    creator: z
      .lazy(() => UserCreateNestedOneWithoutCartItemsInputObjectSchema)
      .optional(),
    product: z
      .lazy(() => ProductCreateNestedOneWithoutCartInputObjectSchema)
      .optional(),
    price: z.number().optional().nullable(),
  })
  .strict();

export const CartCreateWithoutVarientInputObjectSchema = Schema;
