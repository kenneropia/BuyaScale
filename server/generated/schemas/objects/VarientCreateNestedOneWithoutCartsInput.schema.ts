import { z } from 'zod';
import { VarientCreateWithoutCartsInputObjectSchema } from './VarientCreateWithoutCartsInput.schema';
import { VarientUncheckedCreateWithoutCartsInputObjectSchema } from './VarientUncheckedCreateWithoutCartsInput.schema';
import { VarientCreateOrConnectWithoutCartsInputObjectSchema } from './VarientCreateOrConnectWithoutCartsInput.schema';
import { VarientWhereUniqueInputObjectSchema } from './VarientWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientCreateNestedOneWithoutCartsInput> = z
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
    connect: z.lazy(() => VarientWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const VarientCreateNestedOneWithoutCartsInputObjectSchema = Schema;
