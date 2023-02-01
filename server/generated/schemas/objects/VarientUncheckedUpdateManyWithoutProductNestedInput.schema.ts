import { z } from 'zod';
import { VarientCreateWithoutProductInputObjectSchema } from './VarientCreateWithoutProductInput.schema';
import { VarientUncheckedCreateWithoutProductInputObjectSchema } from './VarientUncheckedCreateWithoutProductInput.schema';
import { VarientCreateOrConnectWithoutProductInputObjectSchema } from './VarientCreateOrConnectWithoutProductInput.schema';
import { VarientUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './VarientUpsertWithWhereUniqueWithoutProductInput.schema';
import { VarientWhereUniqueInputObjectSchema } from './VarientWhereUniqueInput.schema';
import { VarientUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './VarientUpdateWithWhereUniqueWithoutProductInput.schema';
import { VarientUpdateManyWithWhereWithoutProductInputObjectSchema } from './VarientUpdateManyWithWhereWithoutProductInput.schema';
import { VarientScalarWhereInputObjectSchema } from './VarientScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientUncheckedUpdateManyWithoutProductNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => VarientUpsertWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => VarientUpsertWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => VarientWhereUniqueInputObjectSchema),
          z.lazy(() => VarientWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => VarientWhereUniqueInputObjectSchema),
          z.lazy(() => VarientWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => VarientWhereUniqueInputObjectSchema),
          z.lazy(() => VarientWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => VarientWhereUniqueInputObjectSchema),
          z.lazy(() => VarientWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => VarientUpdateWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => VarientUpdateWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => VarientUpdateManyWithWhereWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => VarientUpdateManyWithWhereWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => VarientScalarWhereInputObjectSchema),
          z.lazy(() => VarientScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const VarientUncheckedUpdateManyWithoutProductNestedInputObjectSchema =
  Schema;
