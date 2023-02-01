import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CouponWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CouponWhereInputObjectSchema),
        z.lazy(() => CouponWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CouponWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CouponWhereInputObjectSchema),
        z.lazy(() => CouponWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    token: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    expires: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const CouponWhereInputObjectSchema = Schema;
