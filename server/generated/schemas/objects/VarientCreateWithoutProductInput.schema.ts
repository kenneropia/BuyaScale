import { z } from 'zod';
import { OrderCreateNestedManyWithoutVarientInputObjectSchema } from './OrderCreateNestedManyWithoutVarientInput.schema';
import { CartCreateNestedManyWithoutVarientInputObjectSchema } from './CartCreateNestedManyWithoutVarientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    previewImage: z.string().optional().nullable(),
    orders: z
      .lazy(() => OrderCreateNestedManyWithoutVarientInputObjectSchema)
      .optional(),
    carts: z
      .lazy(() => CartCreateNestedManyWithoutVarientInputObjectSchema)
      .optional(),
  })
  .strict();

export const VarientCreateWithoutProductInputObjectSchema = Schema;
