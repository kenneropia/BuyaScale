import { z } from 'zod';
import { VarientCreateWithoutProductInputObjectSchema } from './VarientCreateWithoutProductInput.schema';
import { VarientUncheckedCreateWithoutProductInputObjectSchema } from './VarientUncheckedCreateWithoutProductInput.schema';
import { VarientCreateOrConnectWithoutProductInputObjectSchema } from './VarientCreateOrConnectWithoutProductInput.schema';
import { VarientWhereUniqueInputObjectSchema } from './VarientWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientUncheckedCreateNestedManyWithoutProductInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => VarientCreateWithoutProductInputObjectSchema),
          z.lazy(() => VarientCreateWithoutProductInputObjectSchema).array(),
          z.lazy(() => VarientUncheckedCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => VarientUncheckedCreateWithoutProductInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => VarientCreateOrConnectWithoutProductInputObjectSchema),
          z
            .lazy(() => VarientCreateOrConnectWithoutProductInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => VarientWhereUniqueInputObjectSchema),
          z.lazy(() => VarientWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const VarientUncheckedCreateNestedManyWithoutProductInputObjectSchema =
  Schema;
