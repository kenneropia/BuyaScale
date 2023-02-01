import { z } from 'zod';
import { UserCreateNestedOneWithoutCartItemsInputObjectSchema } from './UserCreateNestedOneWithoutCartItemsInput.schema';
import { VarientCreateNestedOneWithoutCartsInputObjectSchema } from './VarientCreateNestedOneWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    creator: z
      .lazy(() => UserCreateNestedOneWithoutCartItemsInputObjectSchema)
      .optional(),
    varient: z
      .lazy(() => VarientCreateNestedOneWithoutCartsInputObjectSchema)
      .optional(),
    price: z.number().optional().nullable(),
  })
  .strict();

export const CartCreateWithoutProductInputObjectSchema = Schema;
