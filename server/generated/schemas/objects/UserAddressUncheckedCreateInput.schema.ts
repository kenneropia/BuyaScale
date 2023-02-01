import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserAddressUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string().optional().nullable(),
    homeIdNumber: z.string().optional().nullable(),
    closestLandmark: z.string(),
    street: z.string(),
    lga: z.string(),
    postalCode: z.string(),
    town: z.string(),
    note: z.string(),
  })
  .strict();

export const UserAddressUncheckedCreateInputObjectSchema = Schema;
