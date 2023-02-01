import { z } from 'zod';
import { OrderUncheckedCreateNestedManyWithoutVarientInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutVarientInput.schema';
import { CartUncheckedCreateNestedManyWithoutVarientInputObjectSchema } from './CartUncheckedCreateNestedManyWithoutVarientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientUncheckedCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    previewImage: z.string().optional().nullable(),
    orders: z
      .lazy(() => OrderUncheckedCreateNestedManyWithoutVarientInputObjectSchema)
      .optional(),
    carts: z
      .lazy(() => CartUncheckedCreateNestedManyWithoutVarientInputObjectSchema)
      .optional(),
  })
  .strict();

export const VarientUncheckedCreateWithoutProductInputObjectSchema = Schema;
