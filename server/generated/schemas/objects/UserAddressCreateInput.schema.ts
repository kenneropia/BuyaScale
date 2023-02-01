import { z } from 'zod';
import { UserCreateNestedOneWithoutUserAddressInputObjectSchema } from './UserCreateNestedOneWithoutUserAddressInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserAddressCreateInput> = z
  .object({
    id: z.string().optional(),
    userAddress: z
      .lazy(() => UserCreateNestedOneWithoutUserAddressInputObjectSchema)
      .optional(),
    homeIdNumber: z.string().optional().nullable(),
    closestLandmark: z.string(),
    street: z.string(),
    lga: z.string(),
    postalCode: z.string(),
    town: z.string(),
    note: z.string(),
  })
  .strict();

export const UserAddressCreateInputObjectSchema = Schema;
