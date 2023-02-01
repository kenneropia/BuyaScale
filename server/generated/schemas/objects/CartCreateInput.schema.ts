import { z } from 'zod';
import { UserCreateNestedOneWithoutCartItemsInputObjectSchema } from './UserCreateNestedOneWithoutCartItemsInput.schema';
import { ProductCreateNestedOneWithoutCartInputObjectSchema } from './ProductCreateNestedOneWithoutCartInput.schema';
import { VarientCreateNestedOneWithoutCartsInputObjectSchema } from './VarientCreateNestedOneWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateInput> = z
  .object({
    id: z.string().optional(),
    creator: z
      .lazy(() => UserCreateNestedOneWithoutCartItemsInputObjectSchema)
      .optional(),
    product: z
      .lazy(() => ProductCreateNestedOneWithoutCartInputObjectSchema)
      .optional(),
    varient: z
      .lazy(() => VarientCreateNestedOneWithoutCartsInputObjectSchema)
      .optional(),
    price: z.number().optional().nullable(),
  })
  .strict();

export const CartCreateInputObjectSchema = Schema;
