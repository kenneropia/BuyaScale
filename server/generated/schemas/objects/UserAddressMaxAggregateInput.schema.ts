import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserAddressMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    homeIdNumber: z.literal(true).optional(),
    closestLandmark: z.literal(true).optional(),
    street: z.literal(true).optional(),
    lga: z.literal(true).optional(),
    postalCode: z.literal(true).optional(),
    town: z.literal(true).optional(),
    note: z.literal(true).optional(),
  })
  .strict();

export const UserAddressMaxAggregateInputObjectSchema = Schema;
