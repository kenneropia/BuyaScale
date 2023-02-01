import { z } from 'zod';
import { OrderCreateWithoutCreatorInputObjectSchema } from './OrderCreateWithoutCreatorInput.schema';
import { OrderUncheckedCreateWithoutCreatorInputObjectSchema } from './OrderUncheckedCreateWithoutCreatorInput.schema';
import { OrderCreateOrConnectWithoutCreatorInputObjectSchema } from './OrderCreateOrConnectWithoutCreatorInput.schema';
import { OrderUpsertWithWhereUniqueWithoutCreatorInputObjectSchema } from './OrderUpsertWithWhereUniqueWithoutCreatorInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithWhereUniqueWithoutCreatorInputObjectSchema } from './OrderUpdateWithWhereUniqueWithoutCreatorInput.schema';
import { OrderUpdateManyWithWhereWithoutCreatorInputObjectSchema } from './OrderUpdateManyWithWhereWithoutCreatorInput.schema';
import { OrderScalarWhereInputObjectSchema } from './OrderScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutCreatorNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => OrderCreateWithoutCreatorInputObjectSchema),
          z.lazy(() => OrderCreateWithoutCreatorInputObjectSchema).array(),
          z.lazy(() => OrderUncheckedCreateWithoutCreatorInputObjectSchema),
          z
            .lazy(() => OrderUncheckedCreateWithoutCreatorInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => OrderCreateOrConnectWithoutCreatorInputObjectSchema),
          z
            .lazy(() => OrderCreateOrConnectWithoutCreatorInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => OrderUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
          ),
          z
            .lazy(
              () => OrderUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => OrderWhereUniqueInputObjectSchema),
          z.lazy(() => OrderWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => OrderWhereUniqueInputObjectSchema),
          z.lazy(() => OrderWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => OrderWhereUniqueInputObjectSchema),
          z.lazy(() => OrderWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => OrderWhereUniqueInputObjectSchema),
          z.lazy(() => OrderWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => OrderUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
          ),
          z
            .lazy(
              () => OrderUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => OrderUpdateManyWithWhereWithoutCreatorInputObjectSchema),
          z
            .lazy(() => OrderUpdateManyWithWhereWithoutCreatorInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => OrderScalarWhereInputObjectSchema),
          z.lazy(() => OrderScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const OrderUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema =
  Schema;
