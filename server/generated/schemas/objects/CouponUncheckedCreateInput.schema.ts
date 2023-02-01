import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CouponUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    token: z.string(),
    expires: z.date(),
  })
  .strict();

export const CouponUncheckedCreateInputObjectSchema = Schema;
