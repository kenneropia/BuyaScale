import { z } from 'zod';
import { OrderCreateWithoutVarientInputObjectSchema } from './OrderCreateWithoutVarientInput.schema';
import { OrderUncheckedCreateWithoutVarientInputObjectSchema } from './OrderUncheckedCreateWithoutVarientInput.schema';
import { OrderCreateOrConnectWithoutVarientInputObjectSchema } from './OrderCreateOrConnectWithoutVarientInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutVarientInput> =
  z
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
      connect: z
        .union([
          z.lazy(() => OrderWhereUniqueInputObjectSchema),
          z.lazy(() => OrderWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const OrderUncheckedCreateNestedManyWithoutVarientInputObjectSchema =
  Schema;
