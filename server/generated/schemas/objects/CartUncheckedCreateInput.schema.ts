import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    creatorId: z.string().optional().nullable(),
    productId: z.string().optional().nullable(),
    varientId: z.string().optional().nullable(),
    price: z.number().optional().nullable(),
  })
  .strict();

export const CartUncheckedCreateInputObjectSchema = Schema;
