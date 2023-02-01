import { z } from 'zod';
import { VarientWhereInputObjectSchema } from './VarientWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientRelationFilter> = z
  .object({
    is: z
      .lazy(() => VarientWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => VarientWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const VarientRelationFilterObjectSchema = Schema;
