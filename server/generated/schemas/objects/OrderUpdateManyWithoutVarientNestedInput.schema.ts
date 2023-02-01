import { z } from 'zod';
import { OrderCreateWithoutVarientInputObjectSchema } from './OrderCreateWithoutVarientInput.schema';
import { OrderUncheckedCreateWithoutVarientInputObjectSchema } from './OrderUncheckedCreateWithoutVarientInput.schema';
import { OrderCreateOrConnectWithoutVarientInputObjectSchema } from './OrderCreateOrConnectWithoutVarientInput.schema';
import { OrderUpsertWithWhereUniqueWithoutVarientInputObjectSchema } from './OrderUpsertWithWhereUniqueWithoutVarientInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithWhereUniqueWithoutVarientInputObjectSchema } from './OrderUpdateWithWhereUniqueWithoutVarientInput.schema';
import { OrderUpdateManyWithWhereWithoutVarientInputObjectSchema } from './OrderUpdateManyWithWhereWithoutVarientInput.schema';
import { OrderScalarWhereInputObjectSchema } from './OrderScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpdateManyWithoutVarientNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrderCreateWithoutVarientInputObjectSchema),
        z.lazy(() => OrderCreateWithoutVarientInputObjectSchema).array(),
        z.lazy(() => OrderUncheckedCreateWithoutVarientInputObjectSchema),
        z
          .lazy(() => OrderUncheckedCreateWithoutVarientInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => OrderCreateOrConnectWithoutVarientInputObjectSchema),
        z
          .lazy(() => OrderCreateOrConnectWithoutVarientInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => OrderUpsertWithWhereUniqueWithoutVarientInputObjectSchema),
        z
          .lazy(() => OrderUpsertWithWhereUniqueWithoutVarientInputObjectSchema)
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
        z.lazy(() => OrderUpdateWithWhereUniqueWithoutVarientInputObjectSchema),
        z
          .lazy(() => OrderUpdateWithWhereUniqueWithoutVarientInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => OrderUpdateManyWithWhereWithoutVarientInputObjectSchema),
        z
          .lazy(() => OrderUpdateManyWithWhereWithoutVarientInputObjectSchema)
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

export const OrderUpdateManyWithoutVarientNestedInputObjectSchema = Schema;
