import { z } from 'zod';
import { VarientUpdateWithoutCartsInputObjectSchema } from './VarientUpdateWithoutCartsInput.schema';
import { VarientUncheckedUpdateWithoutCartsInputObjectSchema } from './VarientUncheckedUpdateWithoutCartsInput.schema';
import { VarientCreateWithoutCartsInputObjectSchema } from './VarientCreateWithoutCartsInput.schema';
import { VarientUncheckedCreateWithoutCartsInputObjectSchema } from './VarientUncheckedCreateWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientUpsertWithoutCartsInput> = z
  .object({
    update: z.union([
      z.lazy(() => VarientUpdateWithoutCartsInputObjectSchema),
      z.lazy(() => VarientUncheckedUpdateWithoutCartsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VarientCreateWithoutCartsInputObjectSchema),
      z.lazy(() => VarientUncheckedCreateWithoutCartsInputObjectSchema),
    ]),
  })
  .strict();

export const VarientUpsertWithoutCartsInputObjectSchema = Schema;
