import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CouponWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    token: z.string().optional(),
  })
  .strict();

export const CouponWhereUniqueInputObjectSchema = Schema;
