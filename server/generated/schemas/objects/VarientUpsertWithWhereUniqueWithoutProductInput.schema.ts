import { z } from 'zod';
import { VarientWhereUniqueInputObjectSchema } from './VarientWhereUniqueInput.schema';
import { VarientUpdateWithoutProductInputObjectSchema } from './VarientUpdateWithoutProductInput.schema';
import { VarientUncheckedUpdateWithoutProductInputObjectSchema } from './VarientUncheckedUpdateWithoutProductInput.schema';
import { VarientCreateWithoutProductInputObjectSchema } from './VarientCreateWithoutProductInput.schema';
import { VarientUncheckedCreateWithoutProductInputObjectSchema } from './VarientUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => VarientWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => VarientUpdateWithoutProductInputObjectSchema),
        z.lazy(() => VarientUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => VarientCreateWithoutProductInputObjectSchema),
        z.lazy(() => VarientUncheckedCreateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const VarientUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
