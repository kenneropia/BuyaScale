import { z } from 'zod';
import { OrderUncheckedCreateNestedManyWithoutVarientInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutVarientInput.schema';
import { CartUncheckedCreateNestedManyWithoutVarientInputObjectSchema } from './CartUncheckedCreateNestedManyWithoutVarientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    productId: z.string().optional().nullable(),
    previewImage: z.string().optional().nullable(),
    orders: z
      .lazy(() => OrderUncheckedCreateNestedManyWithoutVarientInputObjectSchema)
      .optional(),
    carts: z
      .lazy(() => CartUncheckedCreateNestedManyWithoutVarientInputObjectSchema)
      .optional(),
  })
  .strict();

export const VarientUncheckedCreateInputObjectSchema = Schema;
