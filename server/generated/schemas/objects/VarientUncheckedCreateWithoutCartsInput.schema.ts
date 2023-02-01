import { z } from 'zod';
import { OrderUncheckedCreateNestedManyWithoutVarientInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutVarientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientUncheckedCreateWithoutCartsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    productId: z.string().optional().nullable(),
    previewImage: z.string().optional().nullable(),
    orders: z
      .lazy(() => OrderUncheckedCreateNestedManyWithoutVarientInputObjectSchema)
      .optional(),
  })
  .strict();

export const VarientUncheckedCreateWithoutCartsInputObjectSchema = Schema;
