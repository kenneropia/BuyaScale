import { z } from 'zod';
import { ProductCreateNestedOneWithoutCartInputObjectSchema } from './ProductCreateNestedOneWithoutCartInput.schema';
import { VarientCreateNestedOneWithoutCartsInputObjectSchema } from './VarientCreateNestedOneWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateWithoutCreatorInput> = z
  .object({
    id: z.string().optional(),
    product: z
      .lazy(() => ProductCreateNestedOneWithoutCartInputObjectSchema)
      .optional(),
    varient: z
      .lazy(() => VarientCreateNestedOneWithoutCartsInputObjectSchema)
      .optional(),
    price: z.number().optional().nullable(),
  })
  .strict();

export const CartCreateWithoutCreatorInputObjectSchema = Schema;
