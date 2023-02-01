import { z } from 'zod';
import { VarientCreateWithoutCartsInputObjectSchema } from './VarientCreateWithoutCartsInput.schema';
import { VarientUncheckedCreateWithoutCartsInputObjectSchema } from './VarientUncheckedCreateWithoutCartsInput.schema';
import { VarientCreateOrConnectWithoutCartsInputObjectSchema } from './VarientCreateOrConnectWithoutCartsInput.schema';
import { VarientUpsertWithoutCartsInputObjectSchema } from './VarientUpsertWithoutCartsInput.schema';
import { VarientWhereUniqueInputObjectSchema } from './VarientWhereUniqueInput.schema';
import { VarientUpdateWithoutCartsInputObjectSchema } from './VarientUpdateWithoutCartsInput.schema';
import { VarientUncheckedUpdateWithoutCartsInputObjectSchema } from './VarientUncheckedUpdateWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientUpdateOneWithoutCartsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VarientCreateWithoutCartsInputObjectSchema),
        z.lazy(() => VarientUncheckedCreateWithoutCartsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => VarientCreateOrConnectWithoutCartsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => VarientUpsertWithoutCartsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VarientWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VarientUpdateWithoutCartsInputObjectSchema),
        z.lazy(() => VarientUncheckedUpdateWithoutCartsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const VarientUpdateOneWithoutCartsNestedInputObjectSchema = Schema;
