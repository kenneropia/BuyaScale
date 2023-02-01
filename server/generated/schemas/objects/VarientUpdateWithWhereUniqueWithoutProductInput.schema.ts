import { z } from 'zod';
import { VarientWhereUniqueInputObjectSchema } from './VarientWhereUniqueInput.schema';
import { VarientUpdateWithoutProductInputObjectSchema } from './VarientUpdateWithoutProductInput.schema';
import { VarientUncheckedUpdateWithoutProductInputObjectSchema } from './VarientUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => VarientWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => VarientUpdateWithoutProductInputObjectSchema),
        z.lazy(() => VarientUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const VarientUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
