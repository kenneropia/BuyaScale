import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserAddressWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserAddressWhereInputObjectSchema),
        z.lazy(() => UserAddressWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserAddressWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserAddressWhereInputObjectSchema),
        z.lazy(() => UserAddressWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userAddress: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    userId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    homeIdNumber: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    closestLandmark: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    street: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lga: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    postalCode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    town: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    note: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const UserAddressWhereInputObjectSchema = Schema;
