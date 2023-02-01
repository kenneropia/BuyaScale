import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUncheckedCreateWithoutCreatorInput> = z
  .object({
    id: z.string().optional(),
    quality: z.number().optional(),
    price: z.number(),
    productId: z.string().optional().nullable(),
    varientId: z.string().optional().nullable(),
  })
  .strict();

export const OrderUncheckedCreateWithoutCreatorInputObjectSchema = Schema;
