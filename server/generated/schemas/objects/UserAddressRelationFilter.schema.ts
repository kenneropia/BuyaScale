import { z } from 'zod';
import { UserAddressWhereInputObjectSchema } from './UserAddressWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserAddressRelationFilter> = z
  .object({
    is: z
      .lazy(() => UserAddressWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => UserAddressWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const UserAddressRelationFilterObjectSchema = Schema;
