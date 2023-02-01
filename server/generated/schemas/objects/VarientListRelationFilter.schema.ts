import { z } from 'zod';
import { VarientWhereInputObjectSchema } from './VarientWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientListRelationFilter> = z
  .object({
    every: z.lazy(() => VarientWhereInputObjectSchema).optional(),
    some: z.lazy(() => VarientWhereInputObjectSchema).optional(),
    none: z.lazy(() => VarientWhereInputObjectSchema).optional(),
  })
  .strict();

export const VarientListRelationFilterObjectSchema = Schema;
