import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserAddressUncheckedCreateWithoutUserAddressInput> =
  z
    .object({
      id: z.string().optional(),
      homeIdNumber: z.string().optional().nullable(),
      closestLandmark: z.string(),
      street: z.string(),
      lga: z.string(),
      postalCode: z.string(),
      town: z.string(),
      note: z.string(),
    })
    .strict();

export const UserAddressUncheckedCreateWithoutUserAddressInputObjectSchema =
  Schema;
