import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserAddressRelationFilterObjectSchema } from './UserAddressRelationFilter.schema';
import { UserAddressWhereInputObjectSchema } from './UserAddressWhereInput.schema';
import { ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema';
import { CartListRelationFilterObjectSchema } from './CartListRelationFilter.schema';
import { OrderListRelationFilterObjectSchema } from './OrderListRelationFilter.schema';
import { ReviewListRelationFilterObjectSchema } from './ReviewListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    role: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    fullName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    passwordHash: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    userAddress: z
      .union([
        z.lazy(() => UserAddressRelationFilterObjectSchema),
        z.lazy(() => UserAddressWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    userAddressId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    products: z.lazy(() => ProductListRelationFilterObjectSchema).optional(),
    cartItems: z.lazy(() => CartListRelationFilterObjectSchema).optional(),
    orders: z.lazy(() => OrderListRelationFilterObjectSchema).optional(),
    reviews: z.lazy(() => ReviewListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
