import { z } from 'zod';
import { CartWhereInputObjectSchema } from './CartWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartListRelationFilter> = z
  .object({
    every: z.lazy(() => CartWhereInputObjectSchema).optional(),
    some: z.lazy(() => CartWhereInputObjectSchema).optional(),
    none: z.lazy(() => CartWhereInputObjectSchema).optional(),
  })
  .strict();

export const CartListRelationFilterObjectSchema = Schema;
