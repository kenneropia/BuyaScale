import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedCreateWithoutCreatorInput> = z
  .object({
    id: z.string().optional(),
    productId: z.string().optional().nullable(),
    varientId: z.string().optional().nullable(),
    price: z.number().optional().nullable(),
  })
  .strict();

export const CartUncheckedCreateWithoutCreatorInputObjectSchema = Schema;
