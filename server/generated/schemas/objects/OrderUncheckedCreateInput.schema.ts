import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    quality: z.number().optional(),
    price: z.number(),
    creatorId: z.string().optional().nullable(),
    productId: z.string().optional().nullable(),
    varientId: z.string().optional().nullable(),
  })
  .strict();

export const OrderUncheckedCreateInputObjectSchema = Schema;
