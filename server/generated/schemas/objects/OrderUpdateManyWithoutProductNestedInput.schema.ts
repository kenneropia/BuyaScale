import { z } from 'zod';
import { OrderCreateWithoutProductInputObjectSchema } from './OrderCreateWithoutProductInput.schema';
import { OrderUncheckedCreateWithoutProductInputObjectSchema } from './OrderUncheckedCreateWithoutProductInput.schema';
import { OrderCreateOrConnectWithoutProductInputObjectSchema } from './OrderCreateOrConnectWithoutProductInput.schema';
import { OrderUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './OrderUpsertWithWhereUniqueWithoutProductInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './OrderUpdateWithWhereUniqueWithoutProductInput.schema';
import { OrderUpdateManyWithWhereWithoutProductInputObjectSchema } from './OrderUpdateManyWithWhereWithoutProductInput.schema';
import { OrderScalarWhereInputObjectSchema } from './OrderScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpdateManyWithoutProductNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrderCreateWithoutProductInputObjectSchema),
        z.lazy(() => OrderCreateWithoutProductInputObjectSchema).array(),
        z.lazy(() => OrderUncheckedCreateWithoutProductInputObjectSchema),
        z
          .lazy(() => OrderUncheckedCreateWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => OrderCreateOrConnectWithoutProductInputObjectSchema),
        z
          .lazy(() => OrderCreateOrConnectWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => OrderUpsertWithWhereUniqueWithoutProductInputObjectSchema),
        z
          .lazy(() => OrderUpsertWithWhereUniqueWithoutProductInputObjectSchema)
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
        z.lazy(() => OrderUpdateWithWhereUniqueWithoutProductInputObjectSchema),
        z
          .lazy(() => OrderUpdateWithWhereUniqueWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => OrderUpdateManyWithWhereWithoutProductInputObjectSchema),
        z
          .lazy(() => OrderUpdateManyWithWhereWithoutProductInputObjectSchema)
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

export const OrderUpdateManyWithoutProductNestedInputObjectSchema = Schema;
